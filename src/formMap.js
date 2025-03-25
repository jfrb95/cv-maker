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
    hidden: false,
    example: {
      name: 'John Smith',
      email: 'john@notareal.email',
      phone: '0#### ######'
    },
    map: [
      {
        id: 'name',
        element: 'h1'
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
    hidden: false,
    example: {
      'school-name': 'Happy University',
      'title-of-study': 'Biological Sciences',
      'start-date': 'Jan 2020',
      'end-date': 'Feb 2023'
    },
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
    hidden: false,
    example: {
      'company-name': 'Cool Guy Pharmaceuticals',
      'position-title': 'Shelf Stacking Manager',
      'main-responsibilities': 'Oversaw efficient stocking and organization of pharmaceutical products on shelves. Managed inventory levels, ensuring optimal product availability and minimal discrepancies. Led a team in maintaining store presentation, adhering to safety and compliance standards. Coordinated with procurement and logistics to streamline restocking processes. Trained staff on proper stacking techniques and inventory management best practices.',
      'start-date': 'Mar 2024',
      'end-date': 'Present'
    },
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