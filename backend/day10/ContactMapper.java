package com.example.demo.Mapper;

import com.example.demo.Model.Contact;
import com.example.demo.dto.ContactDto;

public class ContactMapper {

    public static ContactDto toDto(Contact contact) {
        ContactDto contactDto = new ContactDto();
        contactDto.setId(contact.getId());
        contactDto.setName(contact.getName());
        contactDto.setEmail(contact.getEmail());
        contactDto.setSubject(contact.getSubject());
        contactDto.setMessage(contact.getMessage());
        return contactDto;
    }

    public static Contact toEntity(ContactDto contactDto) {
        Contact contact = new Contact();
        contact.setId(contactDto.getId());
        contact.setName(contactDto.getName());
        contact.setEmail(contactDto.getEmail());
        contact.setSubject(contactDto.getSubject());
        contact.setMessage(contactDto.getMessage());
        return contact;
    }
}