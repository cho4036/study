## PF_PACKET

일반적인 소켓은 TCP or UDP 데이터를 다룬다. 다른 말로는 소켓을 이용해서 주고 받는 데이터는 TCP or UDP 레이어의 데이터 뿐이라는 것이다.
그 이하 레이어는 보낼때나 받을때 신경을 쓸 필요가 없다. 우리가 데이터를 건네면 커널은 알아서 IP 헤더와 이더넷 헤더를 붙여서 보내주고, 받을때도 앞의 헤더들을 다 띄어내고 TCP/UDP 데이터만 건네준다.

이러한 방식은 일반적으로 편리하지만, 때로는 TCP 이하의 레이어를 건드려야할 때가 있다. 이럴때 사용할 수 있는 것이 바로 [Raw Socket](https://m.blog.naver.com/PostView.nhn?blogId=myrddin&logNo=70188821936&proxyReferer=https:%2F%2Fwww.google.com%2F)이다. 하지만 Raw Socket은 IP레이어 까지만 조작이 가능하다. 만약에 이더넷 레이어까지 건드리고 싶다면 어떻게 해야할까.



ref: https://guyv.tistory.com/entry/%ED%8E%8C-socket-PFPACKET-%EC%B4%88%EA%B0%84%EB%8B%A8-%EA%B0%95%EC%A2%8C





## AF_PACKET

## PF_INET

## AF_INET