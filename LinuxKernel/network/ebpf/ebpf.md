bpf 한글 요약본 (https://ssup2.github.io/theory_analysis/Linux_BPF/)

ebpf deepdive(recommended for deep dive) (https://www.netronome.com/blog/bpf-ebpf-xdp-and-bpfilter-what-are-these-things-and-what-do-they-mean-enterprise/)
(https://qmonnet.github.io/whirl-offload/2016/09/01/dive-into-bpf/)

ebpf user guide which is introduced from right above link(https://www.netronome.com/documents/305/eBPF-Getting_Started_Guide.pdf)
guide video(https://youtu.be/ayDjR6q0NrM)
bpf performance(https://www.netronome.com/blog/frnog-30-faster-networking-la-francaise/)(https://www.youtube.com/watch?v=AfgwVya9Cog)


bpf&ebpf slide(korean)(https://www.slideshare.net/TaeungSong/bpf-xdp-8-kosslab)

ebpf deep dive(https://docs.cilium.io/en/v1.8/bpf/)


https://netdevconf.info/2.1/slides/apr7/gospodarek-Netdev2.1-XDP-for-the-Rest-of-Us_Final.pdf

https://linuxplumbersconf.org/event/4/contributions/489/attachments/242/423/bpf-packet-capture.pdf

who is already using eBPF?(http://evcomp.dcc.ufmg.br/wp-content/uploads/eBPF-XDP.pdf)

above link(http://evcomp.dcc.ufmg.br/wp-content/uploads/eBPF-XDP.pdf) has good example.

instruction 설명 ( https://tribal1012.tistory.com/250 )

bpf-map 설명 (https://developers.redhat.com/blog/2017/12/15/bpf-maps-used-stapbpf/)


bpf-sock.example(https://git.kernel.org/pub/scm/linux/kernel/git/bpf/bpf.git/tree/samples/bpf/sock_example.c)

bezro(https://yaaam.tistory.com/entry/CC-bzero-%EC%99%80-memset%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90)

시스템콜 등록과정 (https://duksoo.tistory.com/entry/System-call-%EB%93%B1%EB%A1%9D-%EC%88%9C%EC%84%9C)

kprobe(https://www.kernel.org/doc/Documentation/kprobes.txt)
uprobe(http://www.brendangregg.com/blog/2015-06-28/linux-ftrace-uprobe.html)


perf_event(http://www.brendangregg.com/perf.html)


러프하지만 잡다한 bpf 관련 자료 (https://woonizzooni.tistory.com/entry/BPF-cBPF-eBPF-XDP-%EA%B4%80%EB%A0%A8)


xdp(https://en.wikipedia.org/wiki/Express_Data_Path)
xdp(https://www.iovisor.org/technology/xdp)
xdp(https://docs.cilium.io/en/v1.8/bpf/)
썹이블로그(https://ssup2.github.io/theory_analysis/Linux_BPF_Network/)

네트워크 스택(L7~PhysicalLayer) 영문 및 한글, 반드시 한번은 읽어보고 숙지해야될 내용들(https://www.cs.dartmouth.edu/~sergey/netreads/path-of-packet/Network_stack.pdf)(https://d2.naver.com/helloworld/47667) 



xdp device(https://blog.mellanox.com/2020/04/xdp-acceleration-over-mellanoxs-connectx-nics/)
(https://blog.mellanox.com/2020/04/xdp-acceleration-over-mellanoxs-connectx-nics/)
(https://community.mellanox.com/s/article/Introduction-to-XDP-and-eBPF)


xdp용 디바이스 Mellanox ConnectX-(https://www.mellanox.com/files/doc-2020/pb-connectx-4-lx-en-card.pdf)

현재 사용하려는 버전은 ConnectX-4 Lx EN card
5,6은 약간 오버스펙의 Gb/s를 지원함

ConnectX-4 Lx EN card 스펙 ( https://www.mellanox.com/files/doc-2020/pb-connectx-4-lx-en-card.pdf )
해당 Card에서 사용할 Device driver 정보 ( https://docs.mellanox.com/display/MLNXENv461011/Introduction)
해당 Driver가 XDP를 지원하는지에 대한 자료 (https://docs.cilium.io/en/v1.8/bpf/) (Search Keyword: Mellanox) 자료 내부에 Drivers supporting native XDP 부분을 보면 Mellanox의 mlx4, mlx5가 지원한다고 적혀있음

xdp 성능 분석(https://blog.cloudflare.com/ko/how-to-drop-10-million-packets-ko/)



bpf Design Q&A ( https://www.kernel.org/doc/html/latest/bpf/bpf_design_QA.html#q-ld-abs-and-ld-ind-instructions-vs-c-code)

used terminology:
[skb]
[llvm]
[3-addressed code]


eBPF program example
TCP&UDP packet count program

    struct bpf_insn prog[] = {
        BPF_MOV64_REG(BPF_REG_6, BPF_REG_1),      /* r6 = r1 */
        BPF_LD_ABS(BPF_B, ETH_HLEN + offsetof(struct iphdr, protocol)),
                                                  /* r0 = ip->proto */
        BPF_STX_MEM(BPF_W, BPF_REG_10, BPF_REG_0, -4),
                                                  /* *(u32 *)(fp - 4) = r0 */
        BPF_MOV64_REG(BPF_REG_2, BPF_REG_10),     /* r2 = fp */
        BPF_ALU64_IMM(BPF_ADD, BPF_REG_2, -4),    /* r2 = r2 - 4 */
        BPF_LD_MAP_FD(BPF_REG_1, map_fd),         /* r1 = map_fd */
        BPF_EMIT_CALL(BPF_FUNC_map_lookup_elem),  /* r0 = map_lookup(r1, r2) */
        BPF_JMP_IMM(BPF_JEQ, BPF_REG_0, 0, 2),    /* if (r0 == 0) goto pc+2 */
        BPF_MOV64_IMM(BPF_REG_1, 1),              /* r1 = 1 */
        BPF_STX_XADD(BPF_DW, BPF_REG_0, BPF_REG_1, 0),
                                                  /* lock *(u64 *) r0 += r1 */
        BPF_MOV64_IMM(BPF_REG_0, 0),              /* r0 = 0 */
        BPF_EXIT_INSN(),                          /* return r0 */
    };


1. BPF_MOV64_REG : dst 레지스터에 src 레지스터 값 저장
필요 : dst 레지스터, src 레지스터
ex) dst_reg = src_reg

2. BPF_LD_ABS : 직접 패킷 데이터에 상수 값으로 접근하여 R0 레지스터로 size 만큼의 데이터를 저장
필요 : size, 상수 값
ex) R0 = *(uint *) (skb->data + imm32)

3. BPF_STX_MEM : src 레지스터 값을 dst 레지스터 + 오프셋 값의 주소에 size 만큼 저장
필요 : size, dst, src, off
ex) *(uint *) (dst_reg + off16) = src_reg

4. BPF_ALU64_IMM : dst 레지스터와 상수 값을 64bit arithmetic 연산 수행
필요 : opcode, dst 레지스터, 상수 값
ex) dst_reg += imm32

5. BPF_LD_MAP_FD : dst 레지스터에 프로세스의 로컬 map_fd 값을 참조하여 저장
필요 : dst 레지스터, MAP_FD 값


BPF_STX_XADD : dst 레지스터 + 오프셋 값의 주소에 있는 데이터를 src 레지스터 값만큼 더해서 그대로 size 만큼 저장
필요 : size, dst, src, off
ex) *(uint *)(dst_reg + off16) += src_reg

BPF_MOV64_IMM : dst 레지스터에 상수 값 저장
필요 : dst 레지스터, 상수 값
ex) dst_reg = imm32

BPF_EXIT_INSN : BPF 프로그램 종료



bpf 자료 (https://pdfs.semanticscholar.org/512c/783a5ac11f5664bada3c26175ee730a2cfab.pdf)
(https://www.atmarkit.co.jp/ait/articles/1812/10/news016_2.html)