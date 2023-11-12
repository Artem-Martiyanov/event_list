export const getAdaptedData = (eventData) => {
  return {
    type: eventData['__4'] === '-' ? 'simple' : 'regular',
    title: eventData['__1'] === '-' ? null : eventData['__1'],
    time: eventData['__2'] === '-' ? null : eventData['__2'],
    duration: eventData['__3'] === '-' ? null : eventData['__3'],
    speakers: eventData['__4'] === '-' ? null : eventData['__4'].split(';'),
    speakerPhotos: eventData['__5'] === '-' ? null : eventData['__5'].split(';'),
    badgeType: eventData['__6'] === '-' ? null : eventData['__6'],
    badgeLang: eventData['__7'] === '-' ? null : eventData['__7'],
    badgeTheme: eventData['__8'] === '-' ? null : eventData['__8'],
  }
}
