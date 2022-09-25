/*
 * TheaterJS, a typing effect mimicking human behavior.
 *
 * Github repository: 
 * https://github.com/Zhouzi/TheaterJS
 *
 */

let theater = theaterJS({locale: 'en'})

theater
  .on('type:start, erase:start', function () {
    theater.getCurrentActor().$element.classList.add('actor__content--typing')
  })
  .on('type:end, erase:end', function () {
    theater.getCurrentActor().$element.classList.remove('actor__content--typing')
  })
  .on('type:start, erase:start', function () {
    if (theater.getCurrentActor().name === 'visitor') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  })

theater
  .addActor('visitor', { speed: 0.8, accuracy: 0.6 })
  .addActor('carlos')
  .addScene('visitor:Hello!', 600)
  .addScene('carlos:What?', 400)
  .addScene('visitor:Who are you.', 400)
  .addScene('carlos:Nooo...', -3, '!!! ', 600, 'No! ', 600)

  .addScene(theater.replay.bind(theater))