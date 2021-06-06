const fs = require('fs')

const arg = process.argv.slice(2);

async function processCall() {
  try {
    if (arg.length === 0) {
      throw new Error('파일명을 입력해주세요.')
    }

    const date = new Date()

    const title = arg[0]
    const tags = arg[1] ? arg[1].split(',').length === 0 ? ['Programming'] : arg[1].split(',') : ['Programming']

    const textArray = [
      '---',
      `title: ${title}`,
      'tags:',
      tags.map(it => `- ${it}`).join('\n'),
      `date: ${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDay().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`,
      `draft: true`,
      '---'
    ]

    const filePath = `${__dirname}/../content/posts/${title.replace(/ /g, '-')}`

    const isExists = await fs.existsSync(filePath)

    if (isExists) {
      throw new Error('중복되는 폴더 및 파일입니다! 다른 이름으로 생성해주세요~');
    }

    await fs.mkdirSync(filePath, {
      recursive: true
    })

    await fs.writeFileSync(`${filePath}/index.md`, textArray.join('\n'))

    console.log('스크립트 생성을 완료 했습니다!')

  } catch (err) {
    console.error(err)
  }
}

processCall()