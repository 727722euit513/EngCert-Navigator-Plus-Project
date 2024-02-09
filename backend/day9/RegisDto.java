package com.example.demo.dto;

public class RegisDto {

    private String fullName;
    private String email;
    private String mobileNumber;
    private String selectedCourse;
    private String gender;
    private String birthDate;

    // Constructors
    public RegisDto() {
    }

    public RegisDto(String fullName, String email, String mobileNumber, String selectedCourse, String gender, String birthDate) {
        this.fullName = fullName;
        this.email = email;
        this.mobileNumber = mobileNumber;
        this.selectedCourse = selectedCourse;
        this.gender = gender;
        this.birthDate = birthDate;
    }

    // Getters and Setters
    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getSelectedCourse() {
        return selectedCourse;
    }

    public void setSelectedCourse(String selectedCourse) {
        this.selectedCourse = selectedCourse;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(String birthDate) {
        this.birthDate = birthDate;
    }
}