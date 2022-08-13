package repository;

import model.Bac;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BacRepository extends JpaRepository<Bac,Integer> {
}
