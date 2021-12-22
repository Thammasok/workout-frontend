import dotenv from 'dotenv'
import '@testing-library/jest-dom'
// import nock from "nock"

dotenv.config({ path: '.env.test' })

// nock('http://localhost:3000')
//   .get('/api/planetary/apod')
//   .query({ api_key: 'NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo', hd: true })
//   .reply(200, {
//     date: '2019-05-23',
//     title: '',
//     url: ''
//   })

// nock('http://localhost:3000')
//   .get('/api/planetary')
//   .query({ api_key: 'NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo', hd: false })
//   .reply(500)

// nock('http://localhost:3000').get('/api/200').reply(200, { success: true })

// nock('http://localhost:3000').get('/api/404').reply(404, { success: false })
