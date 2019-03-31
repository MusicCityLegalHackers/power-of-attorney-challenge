// @flow
import type {FormInputs} from '../types'
export const MOTHER_ADDRESS = 'motherAddress'
export const FATHER_ADDRESS = 'fatherAddress'
export const CAREGIVER_ADDRESS = 'caregiverAddress'

export const PARENTAL_STATUS_WITH_REASON = 'legalCustodyNoConsent'
export const PARENTAL_STATUSES = [
  'bothParents',
  'parentDeceased',
  'legalCustodySigned',
  'legalCustodySent',
  PARENTAL_STATUS_WITH_REASON
]

let createDocDefinition = (inputInfo: FormInputs) => {
  const statuses = PARENTAL_STATUSES.reduce((m, s) => {
    return {
      ...m,
      [s]: inputInfo.parentalStatus === s ? 'X' : '__'
    }
  }, {})
  const statusWithReason =
    inputInfo.parentalStatus === PARENTAL_STATUS_WITH_REASON
      ? 'X'
      : statuses.legalCustodySent
  const statusReason = inputInfo.parentalStatusReason

  const statusReasonObj =
    statusReason.length > 0
      ? {
          width: '*',
          text: statusReason,
          decoration: 'underline'
        }
      : {
          layout: 'underlineLayout',
          table: {
            headerRows: 0,
            widths: ['*'],
            body: [[statusReason]]
          }
        }

  let multipleFrom = inputInfo.childrenNames
    .map(child => {
      return [
        {
          text: 'Instructions for Completing Power of Attorney Form\n\n',
          alignment: 'center',
          bold: true,
          decoration: 'underline'
        },
        {
          margin: [20, 0, 0, 0],
          columns: [
            {text: '1.', width: 45, margin: [0, 0, 5, 0]},
            {
              text:
                'Print two original copies (one for the caregiver, one for the parent(s)/legal guardian) of these documents and wait to sign both copies until you are in front of a notary public or two witnesses.\n\n'
            }
          ]
        },
        {
          margin: [20, 0, 0, 0],
          columns: [
            {text: '2.', width: 45, margin: [0, 0, 5, 0]},
            {
              text:
                'For both original copies: have the caregiver write their initials in Part II (Questions 10 – 14).\n\n'
            }
          ]
        },
        {
          margin: [20, 0, 0, 0],
          columns: [
            {text: '3.', width: 45, margin: [0, 0, 5, 0]},
            {
              text:
                'For both original copies: have the parent(s)/legal guardian(s) and the caregiver write their initials Part III (Question 15).\n\n'
            }
          ]
        },
        {
          margin: [20, 0, 0, 0],
          columns: [
            {text: '4.', width: 45, margin: [0, 0, 5, 0]},
            {
              text:
                'For both original copies: have the parent(s)/legal guardian(s) and the caregiver sign the document in front a notary or two witnesses.\n\n'
            }
          ]
        },
        {
          margin: [20, 0, 0, 0],
          columns: [
            {text: '5.', width: 45, margin: [0, 0, 5, 0]},
            {
              text:
                'Give one original signed copy to the caregiver to keep in a secure location.  You may also want to provide the caregiver with a copy of the child’s birth certificate, school information and doctor’s information.\n\n'
            }
          ]
        },
        {
          margin: [20, 0, 0, 0],
          columns: [
            {text: '6.', width: 45, margin: [0, 0, 5, 0]},
            {
              text:
                'Keep the other original signed copy of the document for yourself in a safe place.\n\n'
            }
          ]
        },
        {
          margin: [20, 0, 0, 0],
          columns: [
            {text: '7.', width: 45, margin: [0, 0, 5, 0]},
            {
              text:
                "Consider giving a copy to your child’s school and a copy to your child's doctor.\n\n"
            }
          ]
        },
        {
          margin: [20, 0, 0, 0],
          columns: [
            {text: '8.', width: 45, margin: [0, 0, 5, 0]},
            {
              text:
                'You may revoke this power of attorney in writing at any time.  If you revoke the power of attorney, provide a copy of the written revocation to the caregiver(s) and any agency or person who has received a copy of the power of attorney so that they are on notice that it has been revoked.\n\n'
            }
          ]
        },
        {
          text:
            'Instrucciones para completar La Forma de Poder Notarial Para El Cuidado De Un Menor\n\n',
          alignment: 'center',
          bold: true,
          decoration: 'underline'
        },
        {
          margin: [20, 0, 0, 0],
          columns: [
            {text: '1.', width: 45, margin: [0, 0, 5, 0]},
            {
              text:
                'Imprima dos copias originales de estos documentos (una copia para el cuidador y otra para el/los padre(s) custodia legal) y fírme las dos copias solamente cuando este usted cara a cara con un notario público o, alternativamente, dos testigos.\n\n'
            }
          ]
        },
        {
          margin: [20, 0, 0, 0],
          columns: [
            {text: '2.', width: 45, margin: [0, 0, 5, 0]},
            {
              text:
                'Para las dos copias originales: el cuidador deberá escribir sus iniciales en Parte II (Preguntas 10 - 14).\n\n'
            }
          ]
        },
        {
          margin: [20, 0, 0, 0],
          columns: [
            {text: '3.', width: 45, margin: [0, 0, 5, 0]},
            'Para las dos copias originales: el/los padre(s)/custodia legal y el cuidador deberán escribir sus iniciales en Parte III (Pregunta 15). \n\n'
          ]
        },
        {
          margin: [20, 0, 0, 0],
          columns: [
            {text: '4.', width: 45, margin: [0, 0, 5, 0]},
            'Para las dos copias originales: el/los padre(s)/custodia legal y el cuidador deberán firmar el documento cuando estén cara a cara con un notario público o, alternativamente, dos testigos. \n\n'
          ]
        },
        {
          margin: [20, 0, 0, 0],
          columns: [
            {text: '5.', width: 45, margin: [0, 0, 5, 0]},
            'Dele una copia original firmada al guardián para almacenar en un sitio seguro. Quizá querrá darle al guardián una copia de la acta de nacimiento del menor, información de su escuela, e información del médico. \n\n'
          ]
        },
        {
          margin: [20, 0, 0, 0],
          columns: [
            {text: '6.', width: 45, margin: [0, 0, 5, 0]},
            'Mantenga la otra copia original firmada para usted en un sitio seguro. \n\n'
          ]
        },
        {
          margin: [20, 0, 0, 0],
          columns: [
            {text: '7.', width: 45, margin: [0, 0, 5, 0]},
            'Considere darle una copia a la escuela y al médico del menor. \n\n'
          ]
        },
        {
          margin: [20, 0, 0, 0],
          columns: [
            {text: '8.', width: 45, margin: [0, 0, 5, 0]},
            'Usted puede revocar por escrito este poder notarial en cualquier momento. Si usted revoca el poder notarial, dele una copia de la revocación escrita a el/los guardián(es) y a cualquier agencia o persona que ha recibido una copia del poder notarial para que estén informados que se ha revocado. \n\n'
          ],
          pageBreak: 'after'
        },
        {
          text: 'POWER OF ATTORNEY FOR CARE OF A MINOR CHILD\n\n',
          alignment: 'center',
          bold: true,
          decoration: 'underline'
        },
        {
          text: [
            'Use of this form is authorized by T.C.A. § 34-6-301 et seq.  Completion of this form, along with the proper signatures, is sufficient to authorize enrollment of a minor in school and to authorize medical treatment.  However, a school district may require additional documentation/information as permitted by this section of Tennessee law before enrolling a child in school or any extracurricular activities. ',
            {
              text: 'Please print clearly.\n\n',
              italics: true
            }
          ]
        },
        {
          text: [
            {
              text: 'Part I: ',
              bold: true
            },
            'To be filled out and/or initialed by parent(s)/legal guardian(s).\n\n'
          ]
        },
        {
          columns: [
            {
              margin: [20, 0, 0, 0],
              width: '50%',
              columns: [
                {text: '1.', width: 45, margin: [0, 0, 5, 0]},
                {text: 'Minor Child’s Name'}
              ]
            },
            {
              layout: 'underlineLayout',
              table: {
                headerRows: 0,
                widths: [200],
                body: [[child]]
              }
            }
          ]
        },
        {text: '\n\n\n'},
        {
          columns: [
            {
              margin: [20, 0, 0, 0],
              width: '50%',
              columns: [
                {text: '2.', width: 45, margin: [0, 0, 5, 0]},
                {text: 'Mother/Legal Guardian’s Name & Address:\n\n'}
              ]
            },
            {
              layout: 'underlineLayout',
              table: {
                headerRows: 0,
                widths: [200],
                body: [[inputInfo[MOTHER_ADDRESS].name]]
              }
            },
            {text: '\n\n'}
          ]
        },
        {
          columns: [
            {text: '', width: '50%'},
            {
              layout: 'underlineLayout',
              table: {
                headerRows: 0,
                widths: [200],
                body: [
                  [inputInfo[MOTHER_ADDRESS].street_address],
                  [
                    `${inputInfo[MOTHER_ADDRESS].locality}, ${
                      inputInfo[MOTHER_ADDRESS].region
                    } ${inputInfo[MOTHER_ADDRESS].postal_code}`
                  ]
                ]
              }
            },
            {text: '\n\n'}
          ]
        },
        {text: '\n\n'},
        {
          columns: [
            {
              margin: [20, 0, 0, 0],
              width: '50%',
              columns: [
                {text: '3.', width: 45, margin: [0, 0, 5, 0]},
                {text: 'Father/Legal Guardian’s Name & Address:\n\n'}
              ]
            },
            {
              layout: 'underlineLayout',
              table: {
                headerRows: 0,
                widths: [200],
                body: [[inputInfo[FATHER_ADDRESS].name]]
              }
            },
            {text: '\n\n'}
          ]
        },
        {
          columns: [
            {text: '', width: '50%'},
            {
              layout: 'underlineLayout',
              table: {
                headerRows: 0,
                widths: [200],
                body: [
                  [inputInfo[FATHER_ADDRESS].street_address],
                  [
                    `${inputInfo[FATHER_ADDRESS].locality}, ${
                      inputInfo[FATHER_ADDRESS].region
                    } ${inputInfo[FATHER_ADDRESS].postal_code}`
                  ]
                ]
              }
            },
            {text: '\n\n'}
          ]
        },
        {text: '\n\n'},
        {
          columns: [
            {
              margin: [20, 0, 0, 0],
              width: '50%',
              columns: [
                {text: '4.', width: 45, margin: [0, 0, 5, 0]},
                {text: 'Caregiver/Legal Guardian’s Name & Address:\n\n'}
              ]
            },
            {
              layout: 'underlineLayout',
              table: {
                headerRows: 0,
                widths: [200],
                body: [[inputInfo[CAREGIVER_ADDRESS].name]]
              }
            },
            {text: '\n\n'}
          ]
        },
        {
          columns: [
            {text: '', width: '50%'},
            {
              layout: 'underlineLayout',
              table: {
                headerRows: 0,
                widths: [200],
                body: [
                  [inputInfo[CAREGIVER_ADDRESS].street_address],
                  [
                    `${inputInfo[CAREGIVER_ADDRESS].locality}, ${
                      inputInfo[CAREGIVER_ADDRESS].region
                    } ${inputInfo[CAREGIVER_ADDRESS].postal_code}`
                  ]
                ]
              }
            }
          ]
        },
        {text: '\n\n'},
        {
          columns: [
            {text: '5.', width: 45, margin: [20, 0, 0, 0]},
            {
              text: `(_${statuses.bothParents}_)`,
              width: 45,
              margin: [5, 0, 0, 0]
            },
            {
              text:
                'Both parents are living, have legal custody of the minor child and have signed this document; \n'
            }
          ]
        },
        {
          columns: [
            {text: '', width: 45, margin: [20, 0, 5, 0]},
            {text: 'OR\n', bold: true, width: 45, margin: [0, 0, 5, 0]}
          ]
        },
        {
          columns: [
            {text: '', width: 45, margin: [20, 0, 5, 0]},
            {
              text: `(_${statuses.parentDeceased}_)`,
              width: 45,
              margin: [0, 0, 5, 0]
            },
            {text: 'One parent is deceased; \n'}
          ]
        },
        {
          columns: [
            {text: '', width: 45, margin: [20, 0, 5, 0]},
            {text: 'OR\n', bold: true, width: 45, margin: [0, 0, 5, 0]}
          ]
        },
        {
          columns: [
            {text: '', width: 45, margin: [20, 0, 5, 0]},
            {
              text: `(_${statuses.legalCustodySigned}_)`,
              width: 45,
              margin: [0, 0, 5, 0]
            },
            {
              text:
                'One parent has legal custody of the minor child and both parents have signed this document and consent to the appointment of the caregiver; \n'
            }
          ]
        },
        {
          columns: [
            {text: '', width: 45, margin: [20, 0, 5, 0]},
            {text: 'OR\n', bold: true, width: 45, margin: [0, 0, 5, 0]}
          ]
        },
        {
          columns: [
            {text: '', width: 45, margin: [20, 0, 5, 0]},
            {text: `(_${statusWithReason}_) `, width: 45, margin: [0, 0, 5, 0]},
            [
              {
                text:
                  'One parent has legal custody of the minor child, and has sent by Certified Mail, Return Receipt requested, to the other parent at last known address, a copy of this document and a notice of the provisions in § 34-6 - 305; or the non-custodial parent has not consented to the appointment and consent cannot be obtained because \n\n'
              },
              statusReasonObj,
              {text: '.\n\n'}
            ]
          ]
        },
        {text: '\n\n'},
        {
          columns: [
            {text: '6.', width: 45, margin: [20, 0, 0, 0]},
            {
              margin: [0, 0, 5, 0],
              text: [
                'Temporary care-giving authority regarding the minor child is being given to the caregiver because of the following type of hardship ',
                {text: '(check at least one):\n\n', bold: true}
              ]
            }
          ]
        },
        {
          columns: [
            {text: '', width: 45, margin: [20, 0, 5, 0]},
            {text: `(____) `, width: 45, margin: [0, 0, 5, 0]},
            {
              text:
                'the serious illness or incarceration of a parent or legal guardian;\n\n'
            }
          ]
        },
        {
          columns: [
            {text: '', width: 45, margin: [20, 0, 5, 0]},
            {text: `(____) `, width: 45, margin: [0, 0, 5, 0]},
            {
              text:
                'the physical or mental condition of the parent or legal guardian or the child is such that care and supervision of the child cannot be provided;\n\n'
            }
          ]
        },
        {
          columns: [
            {text: '', width: 45, margin: [20, 0, 5, 0]},
            {text: `(____) `, width: 45, margin: [0, 0, 5, 0]},
            {
              text:
                'the loss or uninhabitability of the child’s home as a result of a natural disaster;\n\n'
            }
          ]
        },
        {
          columns: [
            {text: '', width: 45, margin: [20, 0, 5, 0]},
            {text: `(____) `, width: 45, margin: [0, 0, 5, 0]},
            {
              text:
                'the need for medical or mental health treatment (including substance abuse treatment) by the parent or legal guardian;\n\n'
            }
          ]
        },
        {
          columns: [
            {text: '', width: 45, margin: [20, 0, 5, 0]},
            {
              text: [
                `or, (_X_) other (please describe) `,
                {
                  text:
                    'Custodial parent(s) has/have been detained by immigration authorities and/or are involved in an immigration proceeding/ deportation.\n\n',
                  decoration: 'underline'
                }
              ],

              margin: [0, 0, 5, 0]
            }
          ]
        },
        {
          columns: [
            {text: '7. ', width: 45, margin: [20, 0, 5, 0]},
            {text: `(____) `, width: 45, margin: [0, 0, 5, 0]},
            {
              text:
                'I/We the undersigned, authorize the named caregiver to do one or more of the following:\n\n'
            }
          ]
        },
        {
          columns: [
            {text: '', width: 45, margin: [20, 0, 5, 0]},
            {text: '', width: 45, margin: [0, 0, 5, 0]},
            {
              text:
                '(____) enroll the child in school and extracurricular activities (including but not limited to Boy Scouts, Boys & Girls Club),\n\n'
            }
          ]
        },
        {
          columns: [
            {text: '', width: 45, margin: [20, 0, 5, 0]},
            {text: '', width: 45, margin: [0, 0, 5, 0]},
            {
              text:
                '    (____) obtain medical, dental, and mental health treatment for the child, and\n\n'
            }
          ]
        },
        {
          columns: [
            {text: '', width: 45, margin: [20, 0, 5, 0]},
            {text: '', width: 45, margin: [0, 0, 5, 0]},
            {
              text:
                '    (____) provide for the child’s food, lodging, housing, recreation and travel.\n\n'
            }
          ]
        },
        {
          columns: [
            {text: '', width: 45, margin: [20, 0, 5, 0]},
            {text: '', width: 45, margin: [0, 0, 5, 0]},
            {
              text: [
                '(____) I/We grant the following additional power to the named caregiver: \n\n',
                {
                  text:
                    '____________________________________________________________________\n\n'
                }
              ]
            }
          ]
        },
        {
          columns: [
            {text: '8.', width: 45, margin: [20, 0, 5, 0]},
            {text: '(____)', width: 45, margin: [0, 0, 5, 0]},
            {
              text:
                'I/We understand that this document does not provide legal custody to the caregiver. If at any time I/we disagree with a decision of the named caregiver or choose to make any healthcare or educational decisions for my/our child, I/we must revoke the power of attorney, in writing, and provide written documentation to the health care provider and the local education agency (i.e., school).\n\n'
            }
          ]
        },
        {
          columns: [
            {text: '9.', width: 45, margin: [20, 0, 5, 0]},
            {text: '(____)', width: 45, margin: [0, 0, 5, 0]},
            {
              text:
                'I / We understand that this document may be terminated in another written document signed by either parent with legal custody or by any order of a court with competent jurisdiction.\n\n'
            }
          ]
        },
        {
          text: [
            {text: 'Part II: To be initialed by caregiver', bold: true},
            {text: ' (initial inside parenthesis).\n\n'}
          ]
        },
        {
          columns: [
            {text: '10.', width: 45, margin: [20, 0, 5, 0]},
            {text: '(____)', width: 45, margin: [0, 0, 5, 0]},
            {
              text:
                'I understand that this document, properly executed, gives me the right to enroll the minor child in the local education agency serving the area where I reside.\n\n'
            }
          ]
        },
        {
          columns: [
            {text: '11.', width: 45, margin: [20, 0, 5, 0]},
            {text: '(____)', width: 45, margin: [0, 0, 5, 0]},
            {
              text:
                'I understand that this document does not provide me with legal custody.\n\n'
            }
          ]
        },
        {
          columns: [
            {text: '12.', width: 45, margin: [20, 0, 5, 0]},
            {text: '(____)', width: 45, margin: [0, 0, 5, 0]},
            {
              text:
                'I understand that, prior to enrollment, the local education agency may require documentation of the minor child’s residence with a caregiver and/or documentation or other verification of the validity of the stated hardship.\n\n'
            }
          ]
        },
        {
          columns: [
            {text: '13.', width: 45, margin: [20, 0, 5, 0]},
            {text: '(____)', width: 45, margin: [0, 0, 5, 0]},
            {
              text:
                'I understand that, except where limited by federal law, I shall be assigned the rights, duties, and responsibilities that would otherwise be assigned to the parent, legal guardian or legal custodian pursuant to Tennessee Code Annotated Title 49.\n\n'
            }
          ]
        },
        {
          columns: [
            {text: '14.', width: 45, margin: [20, 0, 5, 0]},
            {text: '(____)', width: 45, margin: [0, 0, 5, 0]},
            {
              text:
                'I understand that, if the minor child ceases to reside with me, I am required by law to notify any person, school or health care provider to whom I have given this document.\n\n'
            }
          ]
        },
        {
          text: [
            {
              text: 'Part III: To be initialed by parent(s) and caregiver',
              bold: true
            },
            {text: '(initial inside parenthesis).\n\n'}
          ]
        },
        {
          columns: [
            {text: '15.', width: 45, margin: [20, 0, 5, 0]},
            {text: '(____) (____)', width: 45, margin: [0, 0, 5, 0]},
            {
              text:
                'I/We understand that, by accepting the power of attorney, if we enroll a student in a school system while fraudulently representing the child’s current residence or the parents’ hardship or circumstances for using the power of attorney, either or both of us is liable for restitution to the school district for an amount equal to the per pupil expenditure for the district in which the student is fraudulently enrolled. Restitution shall be cumulative for each year the child has been fraudulently enrolled in the system and may include costs and fees related to litigation.\n\n'
            }
          ]
        },
        {
          canvas: [
            {type: 'line', x1: 0, y1: 5, x2: 595 - 2 * 40, y2: 5, lineWidth: 3}
          ]
        },
        {
          text: [
            '\nI/We declare under penalty of perjury under the laws of the State of Tennessee that the foregoing is true and correct.\n\n'
          ]
        },
        {
          text: [
            // <!-- Start Mother Address -->
            {text: 'STATE OF ', bold: true},
            {text: '_______________) ', bold: true},
            {text: '\n\n COUNTY OF ', bold: true},
            {text: '_______________) ', bold: true},
            '\n\n______________________________         Date: ______________\n',
            {text: 'Mother/Legal Guardian\n\n', bold: true}
          ]
        },
        {
          columns: [
            {text: '', width: 50},
            {
              text:
                'The Mother/Legal Guardian, ______________________, personally appeared before me this _____ day of ____________, 20___.\n\n'
            }
          ]
        },
        {
          columns: [
            {text: '', width: '*'},
            {
              width: 200,
              text: [
                {text: '______________________________\n'},
                {text: 'NOTARY PUBLIC\n', bold: true}
              ]
            }
          ]
        },
        {text: '\nMy commission expires:\n ___________________\n\n\n'},
        // <!-- End Mother Address -->
        // <!-- Start Father Address -->
        {
          text: [
            {text: 'STATE OF ', bold: true},
            {text: '_______________) ', bold: true},
            {text: '\n\n COUNTY OF ', bold: true},
            {text: '_______________) ', bold: true},
            '\n\n______________________________         Date: ______________\n',
            {text: 'Father/Legal Guardian\n\n', bold: true}
          ]
        },
        {
          columns: [
            {text: '', width: 50},
            'The Father/Legal Guardian, ______________________, personally appeared before me this _____ day of ____________, 20___.\n\n'
          ]
        },
        {
          columns: [
            {text: '', width: '*'},
            {
              width: 200,
              text: [
                {text: '______________________________\n'},
                {text: 'NOTARY PUBLIC\n', bold: true}
              ]
            }
          ]
        },
        {text: '\nMy commission expires:\n ___________________\n\n\n'},
        // <!-- End Father Address -->
        // <!-- Start CareGiver Address -->
        {
          text: [
            {text: 'STATE OF ', bold: true},
            {text: '_______________) ', bold: true},
            {text: '\n\n COUNTY OF ', bold: true},
            {text: '_______________) ', bold: true},
            '\n\n______________________________         Date: ______________\n',
            {text: 'Caregiver\n\n', bold: true}
          ]
        },
        {
          columns: [
            {text: '', width: 50},
            'The Caregiver, ______________________, personally appeared before me this _____ day of ____________, 20___.\n\n'
          ]
        },
        {
          columns: [
            {text: '', width: '*'},
            {
              width: 200,
              text: [
                {text: '______________________________\n'},
                {text: 'NOTARY PUBLIC\n', bold: true}
              ]
            }
          ]
        },
        {text: '\nMy commission expires:\n ___________________\n\n\n'},
        {
          canvas: [
            {type: 'line', x1: 0, y1: 5, x2: 595 - 2 * 40, y2: 5, lineWidth: 3}
          ]
        },
        {
          text: [
            '\nIn lieu of a notary, pursuant to Tennessee Code Annotated § 34-6-302, the Legal Guardian(s) may complete the following acknowledgement by two witnesses.\n'
          ]
        },
        {
          canvas: [
            {type: 'line', x1: 0, y1: 5, x2: 595 - 2 * 40, y2: 5, lineWidth: 3}
          ]
        },
        '\n\nThe Legal Guardian(s) signed or acknowledged signing this document in my presence and, based upon personal observation, appears to be emotionally and mentally competent to complete this Power of Attorney for Care of a Minor Child form. Two witnesses must sign and date their signatures concurrently (at the same time) and in each other’s presence.\n\n',
        {
          columns: [
            '_______________________________\n(Signature of Witness #1)',
            '________________________\n(Date)\n\n'
          ]
        },
        {
          columns: [
            '_______________________________\n(Signature of Witness #2)',
            '________________________\n(Date)\n\n'
          ]
        },
        {
          alignment: 'center',
          text:
            'NOTICE TO THE LOCAL EDUCATION AGENCY AND/OR HEALTH CARE PROVIDER:\n\n',
          bold: true
        },
        'Pursuant to T.C.A. § 34-6-308, no person, school official or health care provider who acts in good faith reliance on a power of attorney for care of a minor child to enroll the child in school or to provide medical, dental or mental health care, without actual knowledge of facts contrary to those authorized, is subject to criminal or civil liability to any person, or is subject to professional disciplinary action for such reliance. This section shall apply even if medical, dental, or mental health care is provided to a minor child or the child is enrolled in a school in contravention of the wishes of the parent with legal custody of the minor child, as long as the person, school official or health care provider has been provided a copy of an appropriately executed power of attorney for care of a minor child, and has not been provided written documentation that the parent has revoked the power of attorney for care of a minor child.\n\n',
        'Additionally, pursuant to T.C.A. § 34-6-310, a person who relies on the power of attorney for care of a minor child has no obligation to make any further inquiry or investigation. Nothing in this part shall relieve any individual from liability for violations of other provisions of law.'
      ]
    })
    .reduce((acc, val) => acc.concat(val), [])
  return {
    content: [...multipleFrom],
    styles: {
      underlineText: {
        width: '100%',
        decoration: 'underline',
        decorationStyle: 'solid',
        decorationColor: 'black'
      }
    }
  }
}

export default createDocDefinition
