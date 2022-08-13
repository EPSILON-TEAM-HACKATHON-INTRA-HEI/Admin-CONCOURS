package service;

import model.Bac;
import org.springframework.stereotype.Service;

@Service
public class BacService {
    public static Bac UpdateBac (Bac current_bac_value, Bac new_value){
        if(new_value.getBacGrade() !=null){
            current_bac_value.setBacGrade(new_value.getBacGrade());
        }
        return new_value;
    }
}
