link: https://ko.wikipedia.org/wiki/IEEE_802.1Q

802.1Q doesn't encapsulate ethernet frame. But it add 802.1Q Header(32bit field) between source MAC address and ethertype of the frame.

original ethernet frame : (https://ko.wikipedia.org/wiki/%EC%9D%B4%EB%8D%94%EB%84%B7_%ED%94%84%EB%A0%88%EC%9E%84#/media/%ED%8C%8C%EC%9D%BC:Ethernet_frame.svg)

802.1Q ethernet frame : (https://ko.wikipedia.org/wiki/IEEE_802.1Q#/media/%ED%8C%8C%EC%9D%BC:Ethernet_802.1Q_Insert.svg)


deep dive into 802.1Q 
(https://4network.tistory.com/entry/8021Q-Trunk%EC%9D%98-%EC%9D%B4%ED%95%B4)
(https://m.blog.naver.com/PostView.nhn?blogId=goduck2&logNo=220221579284&proxyReferer=https:%2F%2Fwww.google.com%2F)

component 
1. TPID(16bit) : For original Frame, Upper layer Protocol Type appear next to Source MAC address in a frame. Switch is a physical device so that it expect Protocol Type field during decoding packet. So we have to notify that the frame is including VLAN tag. So when using vlan, we insert 0x8100 in the value of protocol type field next to Source MAC address.
2. TCI 
2.1 PCP(3bit) : This field is used to present the priority for QoS.
2.2 DEI(1bit) : This filed is a flag to check whether this frame is Canonical Format or not. '1' means this frame is Non-Canonical Format, and '0' means this frame is Canonical Format.
2.3 VID(12bit) : This field is used to fill the Vlan ID. It can represent `0~4095' because of 12bit size.

Native VLAN : Assume that Every packet has a VLAN ID. And a one packet doesn't have a VLAN ID. So only one is not using so that we can guess its VLAN ID which that packet has originally. And then we call it 'Native VLAN'.(이 부분은 링크를 참조하자.. 영작이 구리다)


(https://m.blog.naver.com/PostView.nhn?blogId=goduck2&logNo=220221579284&proxyReferer=https:%2F%2Fwww.google.com%2F)
(https://m.blog.naver.com/PostView.nhn?blogId=goduck2&logNo=220221579284&proxyReferer=https:%2F%2Fwww.google.com%2F)
Above link explains Tagged Port, Untagged Port, Access port concept.
