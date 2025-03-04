export  interface SubjectTheme {

  id: number|undefined,
  name: string,
  description: string | undefined,
  subjectId:  number|undefined,
  themeContent: {
  id:  number|undefined,
    name: string | undefined,
    contentText: string,
    views:  number|undefined,
    createdAt: string | undefined,
    updatedAt:string | undefined,
  },
  createdAt: string | undefined,
  updatedAt: string | undefined,

}
