package d0526;

public class Sonheongmin implements Job{

    @Override
    public void work(){
        System.out.println("손흥민이 골을 넣습니다");
    }

    @Override
    public int getPrice(){
        return 1000000;
    }

}
