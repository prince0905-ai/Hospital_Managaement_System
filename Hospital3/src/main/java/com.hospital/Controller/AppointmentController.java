package com.hospital.Controller;



import com.hospital.Appointment.Appointment;
import com.hospital.Services.AppointmentServices;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

        import java.util.List;

@Controller
@RequestMapping("/api/appointments")
@CrossOrigin
public class AppointmentController {

    private final AppointmentServices appointmentServices;

    public AppointmentController(AppointmentServices appointmentServices) {
        this.appointmentServices = appointmentServices;
    }


    // CREATE Appointment
    @PostMapping
    public  String createAppointment( Appointment appointment) {


        appointmentServices.saveAppointment(appointment);

        return "redirect:/Dashboard.html";
    }


    // GET All Appointments
    @GetMapping
    @ResponseBody
    public List<Appointment> getAllAppointments() {

        return appointmentServices.getAllAppointments();
    }


    // GET Appointment By ID
    @GetMapping("/{id}")
    @ResponseBody
    public Appointment getAppointmentById(@PathVariable Long id) {

        return appointmentServices.getAppointmentById(id);
    }


    // DELETE Appointment
    @DeleteMapping("/{id}")
    @ResponseBody
    public String deleteAppointment(@PathVariable Long id) {

        appointmentServices.deleteAppointment(id);

        return "Appointment deleted successfully";
    }
}