<template>
  <v-toolbar elevation="0" color="#fff" class="d-flex justify-end pr-6">

    <v-toolbar-title style="color: #336699"
                     class="mr-4 text-h4"
    ><strong>LOCAR</strong></v-toolbar-title>
    <v-menu offset-y
            origin="center center"
            :nudge-bottom="10"
            transition="scale-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon large text slot="activator"
               style="border-radius: 100%"
               v-bind="attrs"
               v-on="on"
        >
          <template>
            <v-badge
                     bordered
                     bottom
                     color="green accent-4"
                     dot
            >
                <v-avatar>
                  <v-img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABuVBMVEX////61h/hlyIAAADz8/PtVGD2LRP/3SD/2yD72R//3yD+2R/glSKBHgjfkiLimCLqnSP/LxSoFyl0Cwr1yx/tyx310h7ywyDjnSLd3d3qriHwvSB1CwoAAAnstCFtbW23nRfLrhn0yCCQexLnpyHLy8vX19fs7OywsrTlxBzXkCDm5ueYghNMQQl/agChoqUAABW/wMN0YQCpkRXTtBpkUgD/5iE2KADdvRt9chBoWQ2dFSZYSwsmAAAgAADIhh6KiopWVlZENQARAACPXABlZ29uRxEAAB+3eRVvRgC/ogAjHgRBNwhUAAe1JTUeJTg9AADjUFy/IQ4AACg3FgA/KgmJXBVBQUFSUlIRERGnp6eQkJAnJycwMTVESFMMFzEzN0YiFwXcqh56fYUTIS1JKAClbQ06PUZrbnhqQQBFIQAaJjFbYG4uHwBZVAyXCQAcLAXeJw8sPT5ARQmsEg0TGAOJAAAzAAQfIgRyEByGEiE9AAUbABNUDBUuNwcAGQA8AB/FQlGoOEWGJjlUCifElhswGwhWMgCmfgWVUAnHfy21bC2XQBJKAACvXRClWi+QNyDQiztwFgAincynAAAZiklEQVR4nN2d+V8bR5bAkZ7ibnUrajFG4jJYshBISEjowMhEBpnDgICx44mZADbGg4PBNs5kktgzyU52ksnGu9l4jvzFW9WX+qhqdbe6BZ99P/ljpCp9+1W9o47XfX2XRjJ7frQa8qNRd5IHyPrQ7CUiBIDf+9Ds5SG8gwjBh59zaQj3MSCUvW/4shBOiYDQ9L7ly0J4RyL81PuWLwlhGWTxvulLQrj3/51wXwGEYc/bvhyEKiBkPG/7UhCW2oTeRzWXgrANCPueN34ZCPc1hAeety4RPnp0p1nKTnreuj3Z0xA2PW9dIlTc0aelC6AsQw8IlZACy539vOe9WMrvtYTXPW9eJgyBTpreG22q5KEnhPqhInbVK8hmjwj7rhsRkSa9DzAIAtUeEfY9MiPCY+/dk1HKyzcTjd4Q5gmEMxU49VmRh0k+wKXVHo8970Dj8U1TEaBwM16A537OyBDwgUCAK6gzw/seNP9umgjR82WY5Mq6H2tgkpQqTAAjpntCqPWKkqTwA+a51PyYXxPyXg13gRAXpB79itoUeUwixIy1ZV/WMvumQFQhEmZe7LHkeRd6wtCenjDJy/1jxic+zMdSUSHk42KPvmdPU3rCKhsItBnPDz2P545SyjMMMMmeEPYN621pm1Ccj3DqbbYVAk0H3Az0JMef1BKqY0gSlqt6O1Gyc5oO+Bzq0fvcxqyTjIZwQU+IGANFLwfSWks7SLgKgPd5DWHUaRAbXMAoXG7+nmcPGhLaprGx8X7NgdSiZqAadShOxyScetP55Lz+CSKn6E3DWiE+s7a5iZsJ8VCteLOFcqCzZOjhpXq2IqxG4W1jrn/YNVjzoPOjmr55vnXPg1YNQhn3ITmXSrNhIiLLVzww7MZJwFZfdd2mSagzW1o9uRsbJCMGkHNsdtl3xmjImKL3yZPFeqmY9D+NRScGKGpMbN/rzvIdVPXTMMA1vA9LrVaExbX2aSEYHQ8QGXmU8nQ1Ug/rhlnO9HoPGDvGVSEYjAiUoYpGajfZDhjN2IAPDt96VX/qEZzHggiRNlTZHNxx3fXwsmEa8n/wwVl02re4DicYETGShyofWH7ptuusIeoNMEuzbtuykE62IgurMUFkDJKHKlcZm3LX9XHLYGgCq+4HBF06WsOpZ58FRcRgdIg4VLmCy9lzlNPPw/DoZtNVQ9Ziw943YUMcqWiojpCGKkqpXCGCYRqGJ95d1KmvybEzQVJjJDJKQky6QczPGxOX2IofO1/2fPYxUqPFUEVadO77yxWDoRmM+mFK7e4BT86eybOROFS56pjU2nAmK0tmskPTJUNEEx5ZetYlDFFsP/sm8hv0oXqz8Lx8/FwMZZ/OVIpz0tLgy7VShtrBactgaIQTj9JOvdgfXfnnt5doQ5UvzEOjUkimcgmO4xiG4bhAvJasFufO4ckxORQzmtJB4cyXZWcn86c8dhaRnaNhqPLVGsMxLM9rfjTPsyxCZXLJOTgkGEnQj4LwSGzRly12ZxaiBJtBmVE/VHlypiz9iWFT5j2skNFZRARfDI3j0yZN2JUZKQEAmZIJJFeOdKM1r49Kw6ORjececrXFsZUPNWFzWmREsaptRGl/54mGMTOncxbhIWHVh/S3z92JodLsi41YTEyrBoyhpSVj7by9EFnWx90D0dhnPiSHfW7PRGXW4GxDQJRCMmcfETG21BWsbFpLGB6JxMBlBN9BXK9DlNfgk82TuzUHSsSMfFrO40v6lcSI4Evq1NfdubZ8GaqEJWNr4XIr4oKaLqRBdkZY9f6QgihdrSUdEFb9O6uRKY4NGwmHIrEX/kzDrggzQOewVGMKsvpROhANCn7ctcDSRbMhyNH9vKWwcWhqLQ2yM4JP3rArwlPnk1ARnp9Z1yZPkWDszIelUlHcE06RNqZsC1fZUr+O7Eww5sdCoijuCU8puza2EbcVRGRnhA3XS3adxDXhlHG10zHiwoyEGB6M+jhI3RO+inelQg0iUiGypP4ENH3uCfOVLlWIERsNRlKhcHLoKZVW3BK+cusptMLjrRmswtgL/07OuSTMn2tUaJH+dkKUVTjtT/IrikvCV+p5MJbj67WAe8chqtCXxW5Z3BHmlY0xni/gk0xQcW13biAVRvyK2LC4a3pNTl/5hLhs+Pj6M7cRXHgQqXDXn+xeEneEIO/e8ucYEO+SXl9xqcSBqL8qdEeY3ZLsDJPGgFKdAKi6VKIQO2t6SWQUV4SHcm6XEFe2pUv0pBNidiS+6ach7XNHGJLzQjYpHbrBbQzDlssQAD7xzxeKv9bFd0pzEgwrn7B/NBnKgFtCbt6PjV+NuCFcl+0Mq94hoJxjtCNMxafVC0VcEJaVrIJvUU5MOxG24FtWIYkLwt+1z9tpCV3x4bNs3l9A0IlzwuzcTTVi01zKcpsP80k/3X2fG0KA13FlQHJFBbDlNjJlW5eN8M7nV960QzQutS2FpfYmIc/gDVSdti+dDrMr/Vf6P/+jqjGei9frPGNviPLx9DJsFXNafV+2eTgFX1y5cqX/flK32UuASXDm/2VrMLafuQ6Q1DgWpuivw3dK+KfP+xHhlQdfWjs/Zga2akZEvi6FP03kWdpf5+Z9vuDojPBgRQS80t/BN7AoJJ8x2h5eviGa11le3t+o1CGhNEYx4fsOzoGp102AKIoVAzR82WFbUSJf828NShJHhM1r/TLhG2MEY5yM5snJFOVLP+ItR+Uqie+GxhmhokJkTdN6FfF1nVJJxocR7zNfP/hU9J+Kv2HmfA5LHREOQ79KeMtAmIMAwyMRj9Ak6rWAWYcL2hhPOeLN+ZrfY3HSfvaqSvjVLeP53upeNZWrp6rpBTEG+NoUA0gLAoooOoyv+4YmixPC0hs6oXKRd/Ht/Z2rV69d24Ga4RN8TQP4VP4j2/LlLJtWnBA2P1cJ35gJGzvXrmpkR+fXxU/MtAmVDWCm6HPu5JpwJ2mcZ9z2jkh27ZoCCrdYfQQaVwG31dB93vdyMU4ID9qE5uVR7s9Xr119f1sEuH3/KsZc/HNdp0Y+tyUDtv/Lb3/vjHBfnYdfGI/doRkFOyvw7V+++eijj775y18B3iN17kA6gINyXh7SPJdsbG012sOXrx35BaaKo9OXO/3UaYhjsr/8pi3fvAU8L99Cus5wuYri4HmUPWlicrba9AtMFSeE+RVFh2C8sYTXTn+jl2/gLZ6N3+JhmabEeP77e6cxjeLvX5tTi/iYBPZbJDLj2xXR9ECKoS0AcL6dT2iLI8I/fSHPQvM2DJ9DhL/9+OMPRPlYgvx2ERG+36ZnWgn/DY0zQtGY9l8hnWbDhDKexCgiLt5HTsN0+af9pboPt2KN4ohw8m1/f/8DSJOUEv+PD/SC1fgRXH3/Z7oK2ZYXt4k7iLO4F968eft1i/iTTYQi4l/vW6jQwpR6GI47a2rtdTVFW3UyEX4gKnGGokIxCynq7h9MZfaba4frY+0Nrd4TZpZv0nL78JiJEM9Fgl8R+bh6+vXrakN1FsOlVwDz+MpGPRePJ+remSCHwwGo+/U8mAjROP2r8XKTJFztO3jz4MEbudDH5CmsFFs5+coGj/ftvFtEdUh4XKDNKu4/zYQffKQvfKF+9hZ81Y/N8n28zlb63Xk1juHaH2DS3pkgh4R5c0Cq/OrvPjYT/o14QJP/8u0VMTrqvz3V14RijjNlywvw0itj47SdoxZlmHKvvzcB/vAd6XkwX6rxLZQgnSCYLm4mVfCqVI1TwjLtSCJT+cFkaYhHULiFnXYSthwnz1PIcSmP6g05HguzZOMYYAt/tzVGmeptBRBF8IS1fyx8KsAnqt7YU8eEWYqDY5M/GgD/TojPUWQAKp/F5gAfYGDNm5VU5/N5jOLhcgZ38T1x5Z97/ZWqwv43afquIzPj0QqOiz1gihIZ0BlT8iTk69Aeo/0rpt0bTXM5j5y+fcLQcKZcLmeGQ+spvMtJWPH9QQeYIumHqbRVeOWLr+lBOV/1qtCnPcLh0iGKFZfn5uYay+dPAWaKyZxhLzfAJ/+mARwzriXKopmF/e8tjm+wntU1s0NYmoVKEsVU+IIv3qbm4qnCAkAlxeoh28P0Y+0OofYppHbaKnxgqm2i+SBX8WohtTPhATRSxlGJE4N6YR4qOY25Z24p1vR702qwopnC5xpXkaSnxinv3iHQiXB4rJEjOy2e5XJpmKlp/gqiS/z4x69Nm4fqQ3igjtGrRGciforjPFze6ECYhRbFKYuQDJuEbXXZFxnKH3/44UdIUw9+twn7v6JuI3MLMNfybonKmjALnY6RsEwVigoRm0jfupVM0J0cW5UXlfsfUA8Vs8knfeXjR55l+ZYNTUKi8zESJrAA6qhE89PqGygs6JcBqZdPE7CWLU/me0MIdVsHgbgkxXQSPnoLb5SjIWrce2t/YmEmXWlsryDvtH706rRZ6hbX6rvHxEU1gqD4o8gSggCCsF9++6D/GuRoj45vQUDySUwiXk+1qoXiXAOfJj9aK5VdmVcLwin7xw35xAKkU5SsQy9c64/wXYLuJzTDF2+a48oTiJfl46lqZR7WrWqJOCY8MFaqsvzh8eS2xeJ2m4BPQ4E6V8Nco0Bbm0M+mGPircIczL4qOUgdLQif2NJJ+xdQltV0gvLa+Rz1QYQHdmmLj2o3iDPRKizDveOyPWXSP2UqzdGh6xpYuAnpI1yigWwSVYGBkVXyypUZk2Pr1TlqYRibhMbyqZ2EKcB/DYTD1FIZPJerQDFAnYHhQWEDLNIpY3M8w+UQ5dFBhxCdTliec3goFo3AE2FkMBEmYfJcagavOlH5AhPRaaBNQjolCo+X4dRKlXTCLHkxly7MzSTEIpGoMDE+emNAW6GHZxLVLaiy9AbDo5FI0NVxfzRiA60KHGZpJHTCTKdJbwRc2IJ3YpVFJNFoVBhQ/pJIpisolqNHD+HERDQYe2jHVBEFeZRaEY72iTB0QvriL4WwUeRikWBQrgg20f5LAhlAq+AoPBoNBmN3wSJf7ChovNaQJgnD1cLikssk0/sIQGogKgFGafVACRIeGMKAu7Bvx59a/QCGbTXg2Bj4WBCumU4FWUoild7iBqN4iAZH6SbVKOHxKFJ87ATyJScRBllYLlGFe/pj1RaEmXMnz5RpbC+k+PDAxNDIoAO+GwIe2MISZMT3sXQvLJdqwEHIFmHfun3vhN1hWtxbtPCIJkE+PioCTuNS9rKhcfB9soiO9zhkh7D8lAsM3BhI4F/dqV8uEXd8UTY8GBQtkxDB7yPIS3U2wqMTie4Z4xW1/q9lbHdUHUVmPxoRJkbGRwcHRF9uQJX/RzwATNuWovAhH68B7CtLhiY8RKt360i4uLLeal1HGGpy+TnJx0WGdKhIEqMjQ8IECqCAT9ADMiIg9vFBaYiKNr4pGRpsjnG5uy4ZuepYyAZhXxlXu9aITIrc+cTIyMgEetyRiCDs/lSpzziZs4qLCCpGBotkaMLjIje1/LRtwHWFrFMJTgOiDhUpQYgJuzBTq+45iJkxh2RhkMQ2lMVtaRrjAgRSyOCgpJ8ZMDlry9JIiHKJXZIIsem78LrOoZjFmZUZUmIf7AeljvLyC1mi6kOMujY5XHK9zdUxi8zAboyoRiEW2/gMbsnrxU4AE0JEaWJTfdZZaXP5RrTdA6VusQ3A32kAOufJoTtwgqvrtdGQoP/YuAvfVQM2b61pRRmIqKHP2hdmjsW9RHkatifDuHOTowe0Vyn5DmxuRBCVJJGljdXNh7BdMJ+hsAU4oQBOa98jdySeDlP/qDI6NjkGQJu7a1MlfNNl5eG7u58t4jNZM4VUgmNdBVkoDlVtjDaAlA2NYCDEJueGE0Yu+cQwBm0RIr/RuJnI1VPJZDKVC3Au6QJypiRNwTFtFjAs5WqJaNAk1Kr+JGFaBkDbhLhQhLR+6b7ejgYhNr2oLzSQbYj+fpBA6MTkMOb3uNgkdF9fTy/hETHSRk7CcHNUOk5mMDRaRlKpdDuAdgn3n3Zf+AqLqMLY9IsjY2mve2JQazI0bbETAZAA7RI+p57YcyS4up4QWyW82kxaUAhTAe0U9WVSR4SfbtOWejVIJ4KxpZ8OzbXZJiVDM0CchiqjtRrJgDYJS47SfQvC4PRDeEToYF9cnMUqVoQUR1mqkQJok/Cly7IeJolu7J58SujgVDI0IyqhsCRo46jOamRoF4ptEeYdLrtRJTw6yhdIh2OfpLSJhRiRw7uTiBmSZlSpgPYID7qtAtlGDDMV0gFneUdGmYZCEKZC2TW4vboUM1JGJwi+kaFfEbNFuO7JKpj8WxqEI4cZ0CcWsU3pMWSas3B2EtRDRoKmMI61uJpih3DY3p6XPeHmCYedSnpDg/J+9U/50iG8EFVJNzhs3RiqOSRsznk1SDHhUzGayev2xNaqOkMTMxTHKl8HlN1oTI92zwADWpUCt0M4a3HtxbHIbx7LAqy/OijLnnG2pk0shBNzQdrhg8fI9EwrqowI7fyfrVveeLdBONnNjolJWGnhKbM4Ek8V5gAOj7PDIWkaKImFQD6XiE3P4q5seiIRZTIiQMvqrjYIj51uJHYgFJOmPMSCNziGS9SqladyJTQ5sYit0i9baEyP7Db4XIcDYjYIXZeAIgov/yBAswkbDHz0ICCqUE4sUOpv+aOw6fkEmx7p67lOB1E7E2a6qmpNIJS6hCXB4NrkxCL2rvMJdsn0REYYNtfxzkJnwuPuN730hFKzLzd0symgJBbCxljHn4RlEpmeF/9d7/zGxM6ErveeycLKhHdOjO85kRKL2Irty8/Y9HQuwWRjvdRDZ6ghPF4V9EEYrtWKA1Kv6+t3JFzzJvdVhZEJS5sxfRAmGhoUkHp9u7sjoUe5r4ZQ6jL7mbJbII9UMbFQAtIeEpY9yn1V4VYkJWUW2/sh0kiN6APSXhG+8ir3VQnl6mXY5bdjaWEgjA2NMSDtBaFXua8qSqGIEETkOBpH1CixxYtUhIDUb0LaJacuCJUae9LOpIAcII6opSMZnl2UsU/ozQkQrah38F/+z1L0Z2E6GNtdk5N5q4DUL8KQ27qrdOFT8oLKnZ2ff/7f2C/TkTOk1MzxGArDfKn71eG+hZe5ryxxxeW//+c//hm99u9/vJMm5vDBswt4/yH1XnMXwsnp3MG3//rlX79c+/eHfkw+u4QhT3NfWZiK9CrE7O0PsfzzQ59r1FgSljzNfWVhcQXp5mTfJHwoic9V96zPRDk7JGNX4MNf7wNcVwl9BbQknPI4rZCFa+wgrl/fv714Qg8OfJKEr658qJFfSTs1PSJ0dqXEPmEcftUSeleKxilhfsWXQYqD7/cawqs+vffQBuGBx7mvKmwBNIQ7F0e43vVbuSjC12GnPU7fX1g9b98GKXL6e4/34L4Mef/C3o3gkyUVCYuHfcOl38MidhtvL6xi+anniZMqfEqMY0LZ6wDvO694+kV45I+vkBBVrMmDvQurye75+oVGuDmfX4hgj9DDjV+j8EnfS0BfMCFKg/0u422D8InHS8E66UGF5M6Er3zI71Vh0j77CDuEUtAWvjE40P1VJJPwyebFE4pX1xJD+FbQxOiATciwTiwI/a/F3pkQV4EM/0G6wRKJDo3f6KBKTDQwOD4+MjKBZGR8fHR0EF8HJpLytctAeFDk2uc9ESRSZYL4c8ULUDfGJ4LRqHyVJhJR7w8FJ0bw14yEqctAiH2+/rwnVuXgoHJdT77bNXBjVIILkkW8VDoyqD+M5mX5zi4IS/Oc6W6ApJiIMCRe7ZoYCkZExVHoNM8mMqI9N+n729bsEfYdpoeoipFGYicy/QBoM3KNS+APsTzbJN95cieaK+w9eGOAIp32nt4RjyO7ZgxKamSTPTM0nQjz63BiQ42CViwRo+KxBLYH1eYVsV7VX4d0a3vxhHjkWsIR73oJ00uKTE8vWT+Q6ACahcRzwj4JnXDqGIp1juHx/fZ3u8pVUpUqFple2jhZ3Xy3Ir045uH5+Z70fo4Nay0KYa5qceC1Z4TDa5CUyyLy3OjJJibEIxBRYaxPEMmzwzWpEldm//ojuH22ujEtadR6REdGq+s9S52ohPlDaN1Mykl+eDAq4J8tBBHW+fLK6T6u8Wn8ynD2+DnAosxJn45C5J3fKzN6IRIeYz6Yj4s6VO7TYUSsohcWnmyqfHBnFuAnKqcQFHbvnnwy1jN/TySchCJfhYUcl0pXeR6XjlF/H5qCq886NolG7Uuk7oebKqdilQQ8R2NCbOkM/H7dWvvnmP6nDLUqpAP1CiBLwwxKcYv0AyMbu0C68UKS4WzzU/wOgBebJ9jCYrO0+RDky+9CbLpCuN7li5gJIQ1FJrUFhRzHhEeikumMLJ2snt1+fFxyuPQ3XC4dS6+S23t4dxefm8E+EQXwAS43N9aT+Wgm/HQ+Hp/fS+FaswNDUXyr+d0iPFs7KLt20iBfkUazEqUZE3KmmUgnzw974PjNhI9nimgi5lrV4twiwNhzxNblmu3siRwxRIVxtd4Zz6Fu0j2YjgRLUy4je3i0dlwqT1oe87ctw3B7dQPbGU09jwQ0aokFqC6/9KYPuvTG906W1mYXz5JxRn3HA59Iw3auDpWCjYPMXUnvootQpvTq60a1xstlsplAGiqJClSh6W+/vrZuEhQSHC4XW3GREjNWU9DwdzL2mFAUXP98LomLMiDGveQC+JoOXwQhlvIpbON3r3CJrWTS3g0Ll3JRhH146/DJeTGZi8Pcnp/dhPpCFyZ4vJ4ewXHZ117y/wfPfigiLfM4DwAAAABJRU5ErkJggg=="></v-img>
                </v-avatar>

            </v-badge>

          </template>
        </v-btn>
      </template>
      <v-list class="pa-0">
        <v-list-item ripple="ripple" rel="noopener">
          <v-list-item-content>
            <v-list-item-title>Olá, {{}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-list class="pa-0">
        <v-list-item  ripple="ripple" rel="noopener" >
          <v-list-item-icon>
            <v-icon color="#336699">mdi-account-edit</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Meus dados</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item ripple="ripple" rel="noopener">
          <v-list-item-icon>
            <v-icon color="#336699">mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Sair</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-menu>
  </v-toolbar>
</template>

<script>
export default {
  name: "NavbarComponent"
}
</script>

<style scoped>

</style>