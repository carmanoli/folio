
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
  .addScene('visitor:Who are you?', 400)
  .addScene('carlos:Hmmmm...', 600)
  .addScene('carlos:I am Carlos. Carlos Oliveira.', 600)
  .addScene('visitor:What are you doing here?', 400)
  .addScene('carlos:Hmmm... I duno.', 600)
  .addScene('carlos:I am supposed to build my portfolio here.', 600)
  .addScene('carlos:Can you help me?', 600)
  .addScene('visitor:No. Bye!', 400)
  .addScene('carlos:Bye. I am so lonely!', 600)

  .addScene(theater.replay.bind(theater))