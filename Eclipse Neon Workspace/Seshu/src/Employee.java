import java.util.Scanner;

public class Employee
{
public static void main (String args[])
{
	Scanner in=new Scanner(System.in);
	System.out.println("Enter the name of employee");
	String name=in.next();
	System.out.println("Age= ");
	int age=in.nextInt();
	System.out.println("Enter the designation of employee");
	String designation=in.next();
	System.out.println("Enter the salary of employee");
	float salary=in.nextFloat();
System.out.println("Name:"+ name );
System.out.println("Age:" + age );
System.out.println("Designation:" + designation );
System.out.println("Salary:" + salary);
}
}

