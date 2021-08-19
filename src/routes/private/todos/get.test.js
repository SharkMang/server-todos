const { Users } = require("../../../models")

describe('GET /todos', () => {
  let token 
  beforeAll(() => {
    const user = await Users.query().findById(1)
    toket = createAuthToken(user)
    // connectDb
    // run test server/requestClient
  })

  it('should return list of todos correctly', async () => {
    const response = await request.get('/todos').set('authorization', token)

    expect(response).toHaveProperty('body')
    expect(response.status).toBe(200)
  })
})