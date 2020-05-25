CREATE TABLE Login (
    Id UniqueIdentifier PRIMARY KEY default newid(),
    UserName nvarchar(100) unique not null,
    Password nvarchar(50) not null,
);

INSERT INTO Login (UserName, [Password])
VALUES ('username', 'password');

select * from Login