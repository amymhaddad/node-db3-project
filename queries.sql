-- Multi-Table Query Practice

-- Q1
-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select ProductName, CategoryName 
from Category c
inner join Product p
on p.CategoryId = c.Id;

-- Q2  
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Returns 429 records.
select ord.Id, ship.CompanyName
from 'Order' ord
inner join Shipper ship on ord.ShipVia = ship.Id
where ord.OrderDate < '2012-08-09';

-- Q3
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
select prod.ProductName, detail.Quantity 
from Product prod
inner join OrderDetail detail on detail.ProductId = prod.Id 
where detail.OrderId = 10251 
order by prod.ProductName;


--Q4
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
select ord.Id, cust.CompanyName, emp.LastName
from 'Order' ord 
inner join Customer cust on ord.CustomerId = cust.Id
inner join Employee emp on ord.EmployeeId = emp.Id;