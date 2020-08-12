Link1: https://opensource.apple.com/source/xnu/xnu-1456.1.26/bsd/net/bpf.c.auto.html

From Link1, we can see "static int bpf_tap_callback(struct ifnet *ifp, struct mbuf *m)" method.

```c
    static int bpf_tap_callback(struct ifnet *ifp, struct mbuf *m)
    {
        bpf_tap_imp(ifp, 0, m, NULL, 0, mbuf_pkthdr_rcvif(m) == NULL);
    }
```

And then, i try to track who call that func. I found this link bellow

Link2: https://cpp.hotexamples.com/examples/-/-/makedev/cpp-makedev-function-examples.html

From Link2, we can see that "dlil_set_bpf_tap(bp->bif_ifp, BPF_TAP_INPUT_OUTPUT, bpf_tap_callback);" line.

So try to tracking to find source of callback

Link3 : http://fxr.watson.org/fxr/source/bsd/net/dlil.c?v=xnu-792.6.70#L1397

From Link3, there is dlil_set_bpf_tap() method( search keyword: dlil_set_bpf_tap )
