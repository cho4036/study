https://en.wikipedia.org/wiki/Express_Data_Path

![xdp stack](image/Netfilter-packet-flow)


academic paper (https://dl.acm.org/doi/10.1145/3281411.3281443)

tutorial link (https://github.com/xdp-project/xdp-tutorial)


xdp 프로그램 load
ip link set dev {IFNAME} xdpgeneric obj {object} sec {SECNAME}
ex) ip link set dev veth-basic02 xdpgeneric obj xdp_pass_kern.o sec xdp

xdp 프로그램 off
ip link set dev {IFNAME} xdpgeneric off
ex) ip link set dev veth-basic02 xdpgeneric off


