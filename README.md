# EC01-04-FE

Cần thống nhất sử dụng các nhánh: develop & main

- Môi trường dev sẽ dùng branch develop, sau đó merge vào main khi đã test & ready for production.
- Code trong main sẽ được deploy ra production.
- Cần làm feature nào lâu & phức tạp thì có thể tách ra thêm nhánh feature/hotfix để ko làm conflict code trên develop (có thể member khác đang sử dụng)
