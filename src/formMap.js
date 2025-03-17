export default function formMap() {
  return {
    personalInformation,
    education,
    experience
  }
}

function personalInformation() {
  const form = {
    key: crypto.randomUUID(),
    refNo: null,
    map: [
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
  }

  return form;
}

function education() {
  const form = {
    key: crypto.randomUUID(),
    map: [
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
}
  return form;
}

function experience() {
  const form = {
    key: crypto.randomUUID(),
    map: [
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
  }
    return form;
  }