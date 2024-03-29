package com.example.demo.Service;

import com.example.demo.dto.RegisDto;
import com.example.demo.Mapper.RegisMapper;
import com.example.demo.Model.Registration;
import com.example.demo.Repository.RegisRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RegisService {

    private final RegisRepository regisRepository;

    public RegisService(RegisRepository regisRepository) {
        this.regisRepository = regisRepository;
    }

    public RegisDto createRegistration(RegisDto regisDto) {
        Registration registration = RegisMapper.mapToRegistrationEntity(regisDto);
        Registration savedRegistration = regisRepository.save(registration);
        return RegisMapper.mapToRegisDto(savedRegistration);
    }

    public List<RegisDto> getAllRegistrations() {
        List<Registration> registrations = regisRepository.findAll();
        return registrations.stream()
                .map(RegisMapper::mapToRegisDto)
                .collect(Collectors.toList());
    }

    // Add other service methods as needed
}