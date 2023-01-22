FROM loadimpact/k6:latest
COPY . .
ENTRYPOINT [ "k6" ]