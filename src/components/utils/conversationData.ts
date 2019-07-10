import { Message, User } from '@progress/kendo-react-conversational-ui';

export const bot: User = {
  id: 0,
  name: 'Travel Agent',
  avatarUrl: 'https://via.placeholder.com/24/800080/800080.png'
};

export const user: User = {
  id: 1,
  avatarUrl: 'https://via.placeholder.com/24/008000/008000.png'
};

export const conversation: Message[] = [{
  author: bot,
  text: 'Hello, what kind of trip would you like to book?',
  suggestedActions: [{
    type: 'reply',
    value: 'Business trip'
  }, {
    type: 'reply',
    value: 'Leisure trip'
  }],
  timestamp: new Date('2018-02-27 21:00')
}, {
  author: user,
  text: 'Business trip',
  timestamp: new Date('2018-02-27 21:01')
}, {
  author: bot,
  text: `What destinations would you like to visit?`,
  timestamp: new Date('2018-02-27 21:01')
}, {
  author: user,
  text: `just Boston`,
  timestamp: new Date('2018-02-28 00:05')
}, {
  author: bot,
  text: `And the date you need to be there?`,
  timestamp: new Date('2018-02-28 00:05')
}, {
  author: user,
  text: `april 1`,
  timestamp: new Date('2018-02-28 00:15')
}, {
  author: bot,
  text: `What is the duration of your stay?`,
  suggestedActions: [{
    type: 'reply',
    value: '1 week'
  }, {
    type: 'reply',
    value: '2 weeks'
  }, {
    type: 'reply',
    value: '1 month'
  }],
  timestamp: new Date('2018-02-28 00:15')
}, {
  author: user,
  text: `3 days`,
  timestamp: new Date('2018-02-28 00:20')
}, {
  author: bot,
  text: `I've picked these hotels for you`,
  attachments: [{
    title: 'The Westin Copley Place, Boston',
    contentType: 'hotel',
    thumb: '/media/westin.jpeg',
    site: 'http://westin.com'
  } as any, {
    title: 'Boston Park Plaza',
    contentType: 'hotel',
    thumb: '/media/plaza.jpeg',
    site: 'https://www.bostonparkplaza.com/'
  }, {
    title: 'Sheraton Boston Hotel',
    contentType: 'hotel',
    thumb: '/media/sheraton.jpeg',
    site: 'https://westin.com'
  }, {
    title: 'InterContinental Boston',
    contentType: 'hotel',
    thumb: '/media/inter.jpeg',
    site: 'http://www.intercontinentalboston.com/'
  }],
  attachmentLayout: 'carousel',
  timestamp: new Date('2018-02-28 00:15')
}, {
  author: user,
  text: `park plaza`,
  timestamp: new Date('2018-02-28 00:20')
}, {
  author: bot,
  text: `I'll need a photo of your passport`,
  timestamp: new Date('2018-02-28 00:20')
}, {
  author: user,
  text: `there you go`,
  attachments: [{
    title: '#1',
    contentType: 'image/jpeg',
    content: '/media/id.jpeg'
  }, {
    title: '#2',
    contentType: 'image/jpeg',
    content: '/media/id.jpeg'
  }, {
    title: '#3',
    contentType: 'image/jpeg',
    content: '/media/id.jpeg'
  }, {
    title: '#4',
    contentType: 'image/jpeg',
    content: '/media/id.jpeg'
  }],
  timestamp: new Date('2018-02-28 00:35')
}, {
  author: bot,
  text: `Is this correct?`,
  suggestedActions: [{
    type: 'reply',
    value: 'Yes'
  }, {
    type: 'reply',
    value: 'No'
  }],
  attachments: [{
    contentType: 'text/plain',
    content: 'Arrival date: April 1, 2018; Departure date: April 3, 2018; Staying at Boston Park Plaza.'
  }],
  timestamp: new Date('2018-02-28 00:35')
}, {
  author: user,
  text: `yeah`,
  timestamp: new Date('2018-02-28 00:40')
}, {
  author: bot,
  text: `Great. Your reservation number is #1234`,
  suggestedActions: [{
    type: 'reply',
    value: 'Book another trip'
  }, {
    type: 'reply',
    value: 'Make changes to the current trip'
  }, {
    type: 'reply',
    value: 'Make changes to a different trip'
  }],
  timestamp: new Date('2018-02-28 00:41')
}];
