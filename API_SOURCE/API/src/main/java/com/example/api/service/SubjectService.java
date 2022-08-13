package service;

import model.Subjects;
import org.springframework.stereotype.Service;

@Service
public class SubjectService {
    public static Subjects subjects(Subjects current_value, Subjects new_value){
        if(new_value.getName() !=null){
            current_value.setName(new_value.getName());
        }
        return new_value;
    }
}
