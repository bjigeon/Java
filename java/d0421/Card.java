package d0421;

public class Card {
    protected int age;
    protected String kind;
    protected int money=10000;
    public Card(int age){
        this.age = age;

        if(age < 20){
            kind = "학생";
        }else if(age < 60){
            kind = "어른";
        }else {
            kind = "어르신";
        }
    }

    public String getType(){
        return kind;
    }

    public boolean canPaiable(int fee){
        return money >= fee;
    }

    public void payment(int fee){
        money -= fee;
    }
}
