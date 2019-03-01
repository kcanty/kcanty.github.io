(function () {
  const doc = document.documentElement

  doc.classList.remove('no-js')
  doc.classList.add('js')

  // Reveal animations
  if (document.body.classList.contains('has-animations')) {
    /* global ScrollReveal */
    const sr = window.sr = ScrollReveal()

    sr.reveal('.hero-title, .hero-paragraph, .hero-cta', {
      duration: 1000,
      distance: '40px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      origin: 'bottom',
      interval: 150
    })

    sr.reveal('.feature, .pricing-table', {
      duration: 600,
      distance: '30px',
      easing: 'cubic-bezier(0.5, -0.01, 0, .805)',
      interval: 150,
      origin: 'left',
      viewFactor: 0.5
    })

    sr.reveal('.signup-text-container, .signup-form', {
      duration: 500,
      distance: '40px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      origin: 'bottom',
      interval: 150
    })

    sr.reveal('.feature-extended-image', {
      duration: 450,
      scale: 0.9,
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      viewFactor: 0.5
    })
  }
}())

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuICBjb25zdCBkb2MgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcblxuICBkb2MuY2xhc3NMaXN0LnJlbW92ZSgnbm8tanMnKVxuICBkb2MuY2xhc3NMaXN0LmFkZCgnanMnKVxuXG4gIC8vIFJldmVhbCBhbmltYXRpb25zXG4gIGlmIChkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnaGFzLWFuaW1hdGlvbnMnKSkge1xuICAgIC8qIGdsb2JhbCBTY3JvbGxSZXZlYWwgKi9cbiAgICBjb25zdCBzciA9IHdpbmRvdy5zciA9IFNjcm9sbFJldmVhbCgpXG5cbiAgICBzci5yZXZlYWwoJy5oZXJvLXRpdGxlLCAuaGVyby1wYXJhZ3JhcGgsIC5oZXJvLWN0YScsIHtcbiAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgZGlzdGFuY2U6ICc0MHB4JyxcbiAgICAgIGVhc2luZzogJ2N1YmljLWJlemllcigwLjUsIC0wLjAxLCAwLCAxLjAwNSknLFxuICAgICAgb3JpZ2luOiAnYm90dG9tJyxcbiAgICAgIGludGVydmFsOiAxNTBcbiAgICB9KVxuXG4gICAgc3IucmV2ZWFsKCcuZmVhdHVyZSwgLnByaWNpbmctdGFibGUnLCB7XG4gICAgICBkdXJhdGlvbjogNjAwLFxuICAgICAgZGlzdGFuY2U6ICczMHB4JyxcbiAgICAgIGVhc2luZzogJ2N1YmljLWJlemllcigwLjUsIC0wLjAxLCAwLCAuODA1KScsXG4gICAgICBpbnRlcnZhbDogMTUwLFxuICAgICAgb3JpZ2luOiAnbGVmdCcsXG4gICAgICB2aWV3RmFjdG9yOiAwLjVcbiAgICB9KVxuXG4gICAgc3IucmV2ZWFsKCcuc2lnbnVwLXRleHQtY29udGFpbmVyLCAuc2lnbnVwLWZvcm0nLCB7XG4gICAgICBkdXJhdGlvbjogNTAwLFxuICAgICAgZGlzdGFuY2U6ICc0MHB4JyxcbiAgICAgIGVhc2luZzogJ2N1YmljLWJlemllcigwLjUsIC0wLjAxLCAwLCAxLjAwNSknLFxuICAgICAgb3JpZ2luOiAnYm90dG9tJyxcbiAgICAgIGludGVydmFsOiAxNTBcbiAgICB9KVxuXG4gICAgc3IucmV2ZWFsKCcuZmVhdHVyZS1leHRlbmRlZC1pbWFnZScsIHtcbiAgICAgIGR1cmF0aW9uOiA0NTAsXG4gICAgICBzY2FsZTogMC45LFxuICAgICAgZWFzaW5nOiAnY3ViaWMtYmV6aWVyKDAuNSwgLTAuMDEsIDAsIDEuMDA1KScsXG4gICAgICB2aWV3RmFjdG9yOiAwLjVcbiAgICB9KVxuICB9XG59KCkpXG4iXX0=
