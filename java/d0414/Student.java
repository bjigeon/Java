package d0414;

public class Student extends People{
	private String classnumber;
	private int grade;

	public void showInformation() {
		System.out.printf("age : %d, name : %s, grade : %d", age,name,grade);
	}

	public static void main(String[] args) {
		Student student = new Student();

		student.name = "﷿﷿﷿﷿﷿﷿";
		student.age = 20;

//		student.showInformation();

		People people1 = new People();
//		People1.name ="﷿﷿﷿﷿﷿﷿";
		people1.age = 18;


		People people2 = new People();
//		People2.name ="﷿﷿﷿﷿";
		people2.age = 18;

		people1.showInformation();
//		prople2.showInformation();
	}
}
