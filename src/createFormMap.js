export function personalInformation() {
  const formMap = 
    [
      {
        id: 'name'
      },
      {
        id: 'email'
      },
      {
        id: 'phone'
      }
    ]

  return formMap;
}

export function education() {
  const formMap = 
    [
      {
        id: 'school-name'
      },
      {
        id: 'title-of-study'
      },
      {
        id: 'start-date'
      },
      {
        id: 'end-date'
      }
    ]

  return formMap;
}

export function experience() {
  const formMap = 
    [
      {
        id: 'company-name'
      },
      {
        id: 'position-title'
      },
      {
        id: 'main-responsibilities',
        type: 'textarea'
      },
      {
        id: 'start-date'
      },
      {
        id: 'end-date'
      }
    ]

    return formMap;
  }