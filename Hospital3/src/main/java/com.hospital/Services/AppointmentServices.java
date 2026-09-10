package com.hospital.Services;



import com.hospital.Appointment.Appointment;
import com.hospital.Repository.AppointmentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppointmentServices {

    private final AppointmentRepository appointmentRepository;

    public AppointmentServices(AppointmentRepository appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }


    // Save Appointment
    public Appointment saveAppointment(Appointment appointment) {

        return appointmentRepository.save(appointment);
    }


    // Get All Appointments
    public List<Appointment> getAllAppointments() {

        return appointmentRepository.findAll();
    }


    // Get Appointment By ID
    public Appointment getAppointmentById(Long id) {

        return appointmentRepository.findById(id).orElse(null);
    }


    // Delete Appointment
    public void deleteAppointment(Long id) {

        appointmentRepository.deleteById(id);
    }
}