// 1. Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.


class Person{
	constructor(name, age, country){
		this.name = name;
		this.age = age;
		this.country = country;
	}
}

let person = new Person("1","2","tn");
let person1 = new Person("11","22","tn1");
let person2 = new Person("12","22","tn3");

console.log(person)



// 2.Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class Rectangle{
	constructor(width,height){
		this.width = width;
		this.height = height;
	}
	area(){
		console.log(this.width*this.height)
	}
	perimeter(){
		console.log(2*(this.width+this.height));
	}
}

let rec = new Rectangle(10,20);
rec.area()
rec.perimeter()

// 3.Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.


class BankAccount{
	constructor(accountnumber,balance){
		this.accountnumber = accountnumber;
		this.balance = balance;
	}
	deposit(){
		console.log(` Available amount is ${this.balance+amount}`);
	}
	withdraw(){
		console.log(` Available amount is ${Math.abs(this.balance-amount)}`);
	}
}

class Amount extends BankAccount{
	constructor(accountnumber,balance,amount){
		super(accountnumber,balance);
		this.amount = amount;
	}
	deposit(){
		console.log(`${this.amount} is deposited successfully. Available amount is ${this.balance+this.amount}`);
	}
	withdraw(){
		console.log(`${this.amount} is withdraw successfully. Available amount is ${Math.abs(this.balance-this.amount)}`);
	}
}


let amount = new Amount(1234567890,1000,3000);

amount.deposit();
amount.withdraw();	


// 4.Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.


class Shape{
	constructor(){
		
	}
}

class Circle extends Shape{
	constructor(radius){
		super();
		this.radius=radius;    			
	}
	radius1(){
		console.log(3.14*this.radius*this.radius); 
	}
}


class Triangle extends Shape{
	constructor(base,height){
		super(); 
		this.base=base;
		this.height=height;    			
	}
	triangle1(){
		console.log(0.5*this.base*this.height);  
	 }	
}

	let circle=new Circle(4);
	circle.radius1(); 
	
	let triangle = new Triangle(10,20)
	triangle.triangle1();

// 5.Write a JavaScript program that creates a class called 'Employee' with properties for name and salary. Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.


	
	

class Employee{
	    constructor(name,salary){
		    this.name=name;
            this.salary=salary*12;			
		}
        annualSalary(){
		    console.log(`${this.name} annual salary is ${this.salary} and my department is ${this.department} and bonus is ${this.bonus} total salary is ${this.salary+this.bonus}`)
		}		
	}
	class Manager extends Employee{
	    constructor(name,salary,department,bonus){
		    super(name,salary);
		    this.department=department; 
			this.bonus = bonus;
		}
	}


	let manager = new Manager("siva",1000,"developer",5000);
	manager.annualSalary();
	


// 6.Write a JavaScript program that creates a class Book with properties for title, author, and publication year. Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' class and includes an additional property for book price. Override the display method to include the book price. Create an instance of the 'Ebook' class and display its details.

class Book{
	    constructor(title, author,publicationyear){
		    this.title=title;
            this.author=author;
            this.publicationyear=publicationyear; 				
		}
        display(){
		    console.log(this.title+","+this.author+","+this.publicationyear); 
		}		
	
	}
	class Ebook extends Book{
	    constructor(title, author,publicationyear,bookprice){
		super(title, author,publicationyear)
		this.bookprice=bookprice; 
		} 
		display(){
		    console.log(this.title+","+this.author+","+this.publicationyear+","+this.bookprice); 
		}
	}



	let ebook =new Ebook("rich dad vs poor dad","richard",2010,150)
	ebook.display();



