package d0331;

public class OtherClass {
	public static void mian(String[] args) {
		AccessModifierStudy study = new AccessModifierStudy();

		study.publicValue = 5;
//		study.privateValue = 5;

		study.protectedValue = 5;
		study.defaultValue = 5;
	}
}
