http://evcomp.dcc.ufmg.br/wp-content/uploads/eBPF-XDP.pdf


위 예제를 따라하다보면 아래와 같은 에러가 뜰것이다
root@ubuntu:~/bpf/c# clang -target bpf -O2 -c xdp.c -o xdp.o
In file included from xdp.c:1:
In file included from /usr/include/linux/bpf.h:11:
/usr/include/linux/types.h:5:10: fatal error: 'asm/types.h' file not found
#include <asm/types.h>
         ^~~~~~~~~~~~~
1 error generated.

이를 해결하는 링크 (http://ko.uwenku.com/question/p-nykywknt-ra.html)

여기 예제처럼 해결하기 위해 llvm도 apt-get으로 설치해주었다.


ip -force link set dev [DEV] xdpdrv obj xdp.o sec .text 실행시 아래와 같은 에러 발생

Error: underlying driver does not support XDP in native mode.

우선 driver 정보 확인
(https://unix.stackexchange.com/questions/41817/linux-how-to-find-the-device-driver-used-for-a-device)

