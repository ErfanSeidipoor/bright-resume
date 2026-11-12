import { gql } from "@apollo/client";

export const MUTATION_UPDATE_RESUME_RESUME = gql`
  mutation updateResume(
    $updateResumeResumeInputs: UpdateResumeResumeInputsGQL!
  ) {
    updateResume(updateResumeResumeInputs: $updateResumeResumeInputs) {
      id
      userId
      title
    }
  }
`;

export const QUERY_GET_RESUME_BY_ID_RESUME = gql`
  query getResumeById($getResumeByIdResumeArgs: GetResumeByIdResumeArgsGQL!) {
    getResumeById(getResumeByIdResumeArgs: $getResumeByIdResumeArgs) {
      id
      userId
      name
      title
      fontSize
      fontFamily
      color
      role
      isShowImage
      isShowPhoneNumber
      phoneNumber
      isShowLinkedin
      linkedin
      isShowWebsite
      website
      isShowEmail
      email
      isShowLocation
      location
      isShowBirthDay
      birthDay
      isShowSummary
      summaryOrder
      summaryLabel
      summary
      isShowExperience
      experienceOrder
      experienceLabel
      experienceRoleLabel
      experienceCompanyLabel
      experienceLocationLabel
      experiences {
        role
        company
        isShowLocation
        location
        isShowDate
        from
        to
        isShowPoints
        isShow
        points
      }
      isShowProject
      projectOrder
      projectLabel
      projectRoleLabel
      projectTitleLabel
      projectCompanyLabel
      projectLocationLabel
      projectUrlLabel
      projects {
        title
        isShowRole
        role
        isShowCompany
        company
        isShowLocation
        location
        isShowUrl
        url
        isShowDate
        from
        to
        isShowPoints
        isShow
        points
      }
      isShowEducation
      educationLabel
      educationOrder
      educationDegreeLabel
      educationInstituteLabel
      educationLocationLabel
      educationGpaLabel
      educations {
        degree
        isShowInstitute
        institute
        isShowLocation
        location
        isShowGpa
        gpa
        isShowDate
        from
        to
        isShowPoints
        isShow
        points
      }
      isShowCertification
      certificationOrder
      certificationLabel
      certificationNameLabel
      certificationInstituteLabel
      certificationYearLabel
      certifications {
        name
        isShowInstitute
        institute
        isShowDate
        year
        isShowPoints
        isShow
        points
      }
      isShowCourseWork
      courseWorkLabel
      courseWorkOrder
      courseWorkTitleLabel
      courseWorkNameLabel
      courseWorkInstituteLabel
      courseWorkYearLabel
      courseWorkSkillsLabel
      courseWorks {
        name
        isShowInstitute
        institute
        isShowDate
        year
        isShowSkills
        isSkills
        skills
        isShow
        isShowPoints
        points
      }
      isShowInvolvement
      involvementLabel
      involvementOrder
      involvementRoleLabel
      involvementCompanyLabel
      involvementLocationLabel
      involvements {
        role
        isShowCompany
        company
        isShowLocation
        location
        isShowDate
        from
        to
        isShowPoints
        points
        isShow
      }
      isShowSkill
      skillLabel
      skillOrder
      skills {
        point
        isShow
      }
      isShowLanguage
      languageOrder
      languageLabel
      languageNameLabel
      languageLevelLabel
      languages {
        name
        isShowLevel
        level
        isShow
      }
      hobbyOrder
      hobbyLabel
      hobbies {
        point
        isShow
      }
      isShowHobby
      createdAt
      updatedAt
    }
  }
`;

export const MUTATION_GENERATE_PDF_OF_RESUME_FILE = gql`
  mutation generatePdfOfResume(
    $generatePdfOfResumeFileInputs: GeneratePdfOfResumeFileInputsGQL!
  ) {
    generatePdfOfResume(
      generatePdfOfResumeFileInputs: $generatePdfOfResumeFileInputs
    ) {
      id
      userId
      resumeId
    }
  }
`;

export const QUERY_GET_FILE_BY_ID_FILE = gql`
  query getFileById($getFileByIdFileInputs: GetFileByIdFileInputsGQL!) {
    getFileById(getFileByIdFileInputs: $getFileByIdFileInputs) {
      id
      userId
      resumeId
      path
      type
      reason
      status
      isVerified
      name
      uploadLink
    }
  }
`;

export const QUERY_DOWNLOAD_LINK_FILE = gql`
  query getDownloadLink(
    $getDownloadLinkFileInputs: GetDownloadLinkFileInputsGQL!
  ) {
    getDownloadLink(getDownloadLinkFileInputs: $getDownloadLinkFileInputs)
  }
`;
