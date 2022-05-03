const middleware = {}

middleware['onboarding'] = require('..\\middleware\\onboarding.js')
middleware['onboarding'] = middleware['onboarding'].default || middleware['onboarding']

export default middleware
