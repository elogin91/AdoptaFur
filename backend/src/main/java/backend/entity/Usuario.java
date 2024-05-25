package backend.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Data
@Entity
@Table(name = "usuarios")
public class Usuario {
    @Id
    private String email;
    private String password;
    private String nombre;
    private String apellidos;
    private String telefono;
    private LocalDate cumpleanio;
    private String provincia;
    private String description;
    private Boolean enabled;
    @ManyToOne
    @JoinColumn(name = "idrol")
    private Rol rol;
}
