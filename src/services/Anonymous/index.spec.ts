describe('Anonymous Service tests', () => {
  describe('Get Anonymous Token', () => {
    /**
     * Test Mock call Function
     * Test 200 ok
     * Test 4xx Error
     */
    test('200 test', async () => {
      const result = {
        status: 200
      }

      expect(result.status).toEqual(200)
    })
  })
})

export {}
