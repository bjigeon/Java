package d0331;

public class ChildClass extends AccessModifierStudy {
	
	public static void mian(String[] args) {

		ChildClass study = new ChildClass();

		study.publicValue = 5;
//		study.privateValue = 5;

		study.protectedValue = 5;
		study.defaultValue = 5;
	}
}
