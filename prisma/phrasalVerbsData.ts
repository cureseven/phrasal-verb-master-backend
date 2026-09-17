export interface PhrasalVerbExampleSeed {
  en: string;
  ja: string;
}

export interface PhrasalVerbSeed {
  verb: string;
  particle: string;
  meaningJa: string;
  examples: PhrasalVerbExampleSeed[];
}

export const phrasalVerbsData: PhrasalVerbSeed[] = [
  { verb: 'take', particle: 'off', meaningJa: '離陸する、脱ぐ', examples: [
    { en: 'The plane will take off soon.', ja: '飛行機はまもなく離陸します。' },
    { en: 'She took off her wet shoes at the door.', ja: '彼女は玄関で濡れた靴を脱いだ。' },
    { en: "The new product's sales took off quickly.", ja: '新製品の売上は急速に伸びた。' },
  ] },
  { verb: 'take', particle: 'on', meaningJa: '引き受ける、雇う', examples: [
    { en: 'He decided to take on new tasks.', ja: '彼は新しい仕事を引き受けることにした。' },
    { en: 'The company plans to take on more staff next year.', ja: 'その会社は来年もっと多くのスタッフを雇う予定だ。' },
    { en: "I don't want to take on too much responsibility.", ja: 'あまり多くの責任を引き受けたくない。' },
  ] },
  { verb: 'take', particle: 'up', meaningJa: '始める、占める', examples: [
    { en: 'She took up yoga last week.', ja: '彼女は先週ヨガを始めた。' },
    { en: 'The sofa takes up too much space in the room.', ja: 'そのソファは部屋のスペースを取りすぎている。' },
    { en: 'He took up painting after he retired.', ja: '彼は退職後に絵画を始めた。' },
  ] },
  { verb: 'take', particle: 'over', meaningJa: '引き継ぐ、乗っ取る', examples: [
    { en: 'She will take over the project tomorrow.', ja: '彼女は明日そのプロジェクトを引き継ぐ。' },
    { en: 'A larger company took over the small business.', ja: '大企業がその小さな会社を買収した。' },
    { en: 'My brother will take over the family shop someday.', ja: '弟はいつか家業の店を継ぐだろう。' },
  ] },
  { verb: 'take', particle: 'in', meaningJa: '取り込む、だます', examples: [
    { en: 'I was taken in by his lies.', ja: '私は彼の嘘にだまされた。' },
    { en: 'The shelter takes in stray animals.', ja: 'その保護施設は野良動物を引き取っている。' },
    { en: "It's hard to take in so much information at once.", ja: '一度にこんなに多くの情報を理解するのは難しい。' },
  ] },
  { verb: 'take', particle: 'out', meaningJa: '連れ出す、取り出す', examples: [
    { en: 'He took me out for dinner.', ja: '彼は私を夕食に連れ出してくれた。' },
    { en: 'She took out her phone to check the time.', ja: '彼女は時間を確認するために携帯を取り出した。' },
    { en: "Don't forget to take out the trash tonight.", ja: '今夜ゴミを出すのを忘れないで。' },
  ] },
  { verb: 'take', particle: 'after', meaningJa: '似ている', examples: [
    { en: 'She takes after her mother.', ja: '彼女は母親に似ている。' },
    { en: 'My son takes after me in his love of music.', ja: '息子は音楽好きなところが私に似ている。' },
    { en: "He doesn't take after his father at all.", ja: '彼は父親に全く似ていない。' },
  ] },
  { verb: 'take', particle: 'back', meaningJa: '撤回する、思い出す', examples: [
    { en: 'I take back what I said.', ja: 'さっき言ったことは撤回します。' },
    { en: 'This song takes me back to my childhood.', ja: 'この歌は私を子供時代に連れ戻してくれる。' },
    { en: "You can take back the gift if you don't like it.", ja: '気に入らなければその贈り物は返品できます。' },
  ] },
  { verb: 'get', particle: 'on', meaningJa: '乗る、仲良くやっていく', examples: [
    { en: 'Get on the bus before it leaves.', ja: 'バスが出発する前に乗ってください。' },
    { en: 'How are you getting on with your new job?', ja: '新しい仕事はどんな調子ですか。' },
    { en: 'She gets on well with everyone at the office.', ja: '彼女は職場の誰とでもうまくやっている。' },
  ] },
  { verb: 'get', particle: 'off', meaningJa: '降車する', examples: [
    { en: 'We need to get off at the next stop.', ja: '次の停留所で降りなければなりません。' },
    { en: 'What time do you get off work today?', ja: '今日は何時に仕事が終わりますか。' },
    { en: 'He got off the train and looked around.', ja: '彼は電車を降りて辺りを見回した。' },
  ] },
  { verb: 'get', particle: 'up', meaningJa: '起きる', examples: [
    { en: 'I get up at 7 AM every morning.', ja: '私は毎朝7時に起きます。' },
    { en: 'She got up quickly when she heard the noise.', ja: '彼女は物音を聞いてすぐに立ち上がった。' },
    { en: "It's hard to get up early in winter.", ja: '冬に早起きするのは大変だ。' },
  ] },
  { verb: 'get', particle: 'along', meaningJa: '仲良くやっていく', examples: [
    { en: 'Do you get along with your colleagues?', ja: '同僚とはうまくやっていますか。' },
    { en: 'My sister and I get along really well.', ja: '私と姉はとても仲が良い。' },
    { en: "It's important to get along with your neighbors.", ja: '近所の人とうまくやっていくことは大切だ。' },
  ] },
  { verb: 'get', particle: 'out', meaningJa: '出て行く、取り出す', examples: [
    { en: 'Get out of the room.', ja: '部屋から出て行きなさい。' },
    { en: 'She got out her notebook to take notes.', ja: '彼女はメモを取るためにノートを取り出した。' },
    { en: "We need to get out of the city for the weekend.", ja: '週末は都会を離れる必要がある。' },
  ] },
  { verb: 'get', particle: 'in', meaningJa: '到着する、中に入る', examples: [
    { en: 'What time does the train get in?', ja: '電車は何時に到着しますか。' },
    { en: "Please get in the car, we're leaving now.", ja: '車に乗ってください、もう出発します。' },
    { en: 'How did the burglar get in the house?', ja: '泥棒はどうやって家に入ったのですか。' },
  ] },
  { verb: 'get', particle: 'over', meaningJa: '乗り越える、回復する', examples: [
    { en: 'It took weeks to get over the flu.', ja: 'インフルエンザから回復するのに数週間かかった。' },
    { en: "I still can't get over how kind she was.", ja: '彼女がどれほど親切だったか、いまだに驚いている。' },
    { en: 'He finally got over his fear of flying.', ja: '彼はついに飛行機に対する恐怖を克服した。' },
  ] },
  { verb: 'get', particle: 'through', meaningJa: 'やり遂げる、連絡がつく', examples: [
    { en: 'I need to get through this work.', ja: 'この仕事をやり遂げなければならない。' },
    { en: "I couldn't get through to him on the phone.", ja: '電話で彼に連絡がつかなかった。' },
    { en: 'We managed to get through the difficult year together.', ja: '私たちは困難な一年を共に乗り越えた。' },
  ] },
  { verb: 'get', particle: 'back', meaningJa: '戻る、取り戻す', examples: [
    { en: 'When will you get back home?', ja: 'いつ家に戻りますか。' },
    { en: 'I finally got back my lost wallet.', ja: 'やっと失くした財布を取り戻した。' },
    { en: "Let's get back to work after the break.", ja: '休憩の後、仕事に戻りましょう。' },
  ] },
  { verb: 'get', particle: 'away', meaningJa: '逃げる、離れる', examples: [
    { en: 'We want to get away for the weekend.', ja: '週末はどこかに出かけたい。' },
    { en: 'The thief managed to get away before the police arrived.', ja: '泥棒は警察が来る前に逃げおおせた。' },
    { en: 'I need to get away from all this noise.', ja: 'この騒音から離れる必要がある。' },
  ] },
  { verb: 'get', particle: 'by', meaningJa: 'なんとかやっていく', examples: [
    { en: 'How do you get by on such a small salary?', ja: 'そんな少ない給料でどうやってやっていくのですか。' },
    { en: 'We can get by without a car in this city.', ja: 'この街では車がなくてもなんとかなる。' },
    { en: 'She gets by with a little help from her friends.', ja: '彼女は友達の少しの助けでなんとかやっている。' },
  ] },
  { verb: 'get', particle: 'down', meaningJa: '落とす、憂鬱にさせる', examples: [
    { en: 'This rainy weather gets me down.', ja: 'この雨の天気は気分を滅入らせる。' },
    { en: "Don't let the bad news get you down.", ja: 'その悪い知らせに落ち込まないで。' },
    { en: "Get down from there, it's dangerous!", ja: 'そこから降りなさい、危ないよ！' },
  ] },
  { verb: 'turn', particle: 'on', meaningJa: 'つける、起動する', examples: [
    { en: 'Please turn on the light.', ja: '電気をつけてください。' },
    { en: 'He turned on the computer and checked his email.', ja: '彼はパソコンを起動してメールを確認した。' },
    { en: 'The movie really turned me on to classical music.', ja: 'その映画のおかげでクラシック音楽に興味を持つようになった。' },
  ] },
  { verb: 'turn', particle: 'off', meaningJa: '消す、停止する', examples: [
    { en: "Don't forget to turn off the TV.", ja: 'テレビを消すのを忘れないで。' },
    { en: 'She turned off her phone during the meeting.', ja: '彼女は会議中に携帯の電源を切った。' },
    { en: 'This loud music really turns me off.', ja: 'このうるさい音楽は本当に興ざめだ。' },
  ] },
  { verb: 'turn', particle: 'up', meaningJa: '現れる、音量を上げる', examples: [
    { en: "He didn't turn up for the meeting.", ja: '彼は会議に現れなかった。' },
    { en: 'Can you turn up the volume a little?', ja: '少し音量を上げてもらえますか。' },
    { en: 'An old friend turned up at the party unexpectedly.', ja: '昔の友人がパーティーに突然現れた。' },
  ] },
  { verb: 'turn', particle: 'down', meaningJa: '断る、音量を下げる', examples: [
    { en: 'She had to turn down the job offer.', ja: '彼女はその仕事のオファーを断らなければならなかった。' },
    { en: 'Could you turn down the music, please?', ja: '音楽の音量を下げてもらえますか。' },
    { en: 'He turned down my invitation to the party.', ja: '彼は私のパーティーへの招待を断った。' },
  ] },
  { verb: 'turn', particle: 'out', meaningJa: '判明する、結果になる', examples: [
    { en: 'Everything turned out fine in the end.', ja: '結局すべてうまくいった。' },
    { en: 'It turned out that he was right all along.', ja: '結局彼がずっと正しかったことがわかった。' },
    { en: 'A large crowd turned out for the concert.', ja: '多くの人がそのコンサートに集まった。' },
  ] },
  { verb: 'turn', particle: 'over', meaningJa: 'ひっくり返す、引き渡す', examples: [
    { en: 'Turn the page over.', ja: 'ページをめくってください。' },
    { en: 'He turned the car over to the police.', ja: '彼は車を警察に引き渡した。' },
    { en: 'The boat turned over in the storm.', ja: 'ボートは嵐でひっくり返った。' },
  ] },
  { verb: 'turn', particle: 'around', meaningJa: '方向転換する、好転させる', examples: [
    { en: 'We need to turn the business around.', ja: '私たちはこの事業を立て直す必要がある。' },
    { en: 'She turned around when she heard her name.', ja: '彼女は自分の名前を聞いて振り向いた。' },
    { en: 'The team turned the game around in the last minute.', ja: 'チームは最後の瞬間に試合を逆転させた。' },
  ] },
  { verb: 'give', particle: 'up', meaningJa: '諦める、やめる', examples: [
    { en: 'Never give up on your dreams.', ja: '夢を諦めないで。' },
    { en: 'He gave up smoking last year.', ja: '彼は去年タバコをやめた。' },
    { en: "Don't give up now, you're almost there!", ja: '今諦めないで、もう少しで到達するよ！' },
  ] },
  { verb: 'give', particle: 'in', meaningJa: '屈する、提出する', examples: [
    { en: 'He finally gave in to their demands.', ja: '彼はついに彼らの要求に屈した。' },
    { en: 'Please give in your assignment by Friday.', ja: '金曜日までに課題を提出してください。' },
    { en: 'She refused to give in to the pressure.', ja: '彼女はそのプレッシャーに屈することを拒んだ。' },
  ] },
  { verb: 'give', particle: 'out', meaningJa: '配る、使い果たす', examples: [
    { en: 'They gave out free samples at the store.', ja: '彼らは店で無料サンプルを配った。' },
    { en: 'My phone battery gave out in the middle of the call.', ja: '電話の途中で携帯のバッテリーが切れた。' },
    { en: 'The teacher gave out the test papers.', ja: '先生はテスト用紙を配った。' },
  ] },
  { verb: 'give', particle: 'away', meaningJa: 'タダで譲る、秘密を漏らす', examples: [
    { en: 'She gave away all her old books.', ja: '彼女は古い本を全部人にあげた。' },
    { en: "Don't give away the ending of the movie!", ja: '映画の結末を明かさないで！' },
    { en: 'The store is giving away free coffee today.', ja: 'その店では今日無料でコーヒーを配っている。' },
  ] },
  { verb: 'give', particle: 'back', meaningJa: '返す', examples: [
    { en: 'Please give me back my pen.', ja: '私のペンを返してください。' },
    { en: 'He gave back the money he borrowed.', ja: '彼は借りたお金を返した。' },
    { en: "I'll give the book back to you tomorrow.", ja: '明日その本を君に返すよ。' },
  ] },
  { verb: 'look', particle: 'at', meaningJa: '見る', examples: [
    { en: 'Look at the beautiful sunset.', ja: 'あの美しい夕日を見て。' },
    { en: 'Can you look at my essay before I submit it?', ja: '提出する前に私のエッセイを見てもらえますか。' },
    { en: 'She looked at him in surprise.', ja: '彼女は驚いて彼を見た。' },
  ] },
  { verb: 'look', particle: 'for', meaningJa: '探す', examples: [
    { en: 'I am looking for my keys.', ja: '鍵を探しています。' },
    { en: 'We are looking for a new apartment.', ja: '私たちは新しいアパートを探している。' },
    { en: 'He is looking for a job in marketing.', ja: '彼はマーケティングの仕事を探している。' },
  ] },
  { verb: 'look', particle: 'after', meaningJa: '世話をする', examples: [
    { en: 'Can you look after my dog?', ja: '私の犬の世話をしてもらえますか。' },
    { en: 'She looks after her elderly parents.', ja: '彼女は高齢の両親の世話をしている。' },
    { en: "Please look after yourself while I'm away.", ja: '私がいない間、自分の体に気をつけてね。' },
  ] },
  { verb: 'look', particle: 'forward', meaningJa: '楽しみに待つ', examples: [
    { en: 'I look forward to seeing you.', ja: 'お会いできるのを楽しみにしています。' },
    { en: 'We are looking forward to the summer vacation.', ja: '私たちは夏休みを楽しみにしている。' },
    { en: 'She is looking forward to her new job.', ja: '彼女は新しい仕事を楽しみにしている。' },
  ] },
  { verb: 'look', particle: 'into', meaningJa: '調査する', examples: [
    { en: 'The police are looking into the matter.', ja: '警察はその件を調査している。' },
    { en: 'I will look into the problem right away.', ja: 'すぐにその問題を調べます。' },
    { en: 'The company is looking into new markets.', ja: 'その会社は新しい市場を調査している。' },
  ] },
  { verb: 'look', particle: 'out', meaningJa: '気をつける', examples: [
    { en: 'Look out! A car is coming.', ja: '気をつけて！車が来るよ。' },
    { en: 'You should look out for pickpockets here.', ja: 'ここではスリに気をつけたほうがいい。' },
    { en: 'Look out for the icy patches on the road.', ja: '道路の凍結箇所に気をつけて。' },
  ] },
  { verb: 'look', particle: 'up', meaningJa: '調べる、見上げる', examples: [
    { en: 'Look up the word in the dictionary.', ja: 'その単語を辞書で調べなさい。' },
    { en: 'She looked up at the starry sky.', ja: '彼女は星空を見上げた。' },
    { en: "I'll look up the restaurant's opening hours online.", ja: 'そのレストランの営業時間をネットで調べます。' },
  ] },
  { verb: 'look', particle: 'over', meaningJa: '軽く目を通す', examples: [
    { en: 'Please look over this report.', ja: 'この報告書に目を通してください。' },
    { en: 'Can you look over my resume before the interview?', ja: '面接の前に私の履歴書を見てもらえますか。' },
    { en: 'He looked over the contract carefully.', ja: '彼は契約書を注意深く見直した。' },
  ] },
  { verb: 'look', particle: 'down', meaningJa: '見下ろす、軽蔑する', examples: [
    { en: "Don't look down from the balcony.", ja: 'バルコニーから下を見ないで。' },
    { en: 'He always looks down on people who disagree with him.', ja: '彼は自分に反対する人をいつも見下している。' },
    { en: 'From the plane, we looked down at the city lights.', ja: '飛行機から街の明かりを見下ろした。' },
  ] },
  { verb: 'come', particle: 'in', meaningJa: '入る', examples: [
    { en: 'Please come in and make yourself at home.', ja: 'どうぞ入って、くつろいでください。' },
    { en: 'The rain started to come in through the window.', ja: '雨が窓から入り始めた。' },
    { en: 'Winter is coming in early this year.', ja: '今年は冬が早く到来している。' },
  ] },
  { verb: 'come', particle: 'out', meaningJa: '出る、出版される', examples: [
    { en: 'When does their new album come out?', ja: '彼らの新しいアルバムはいつ出ますか。' },
    { en: 'The truth finally came out after the investigation.', ja: '調査の後、真実がついに明らかになった。' },
    { en: 'Come out and enjoy the sunshine.', ja: '外に出て日光を楽しんで。' },
  ] },
  { verb: 'come', particle: 'up', meaningJa: '話題に出る、近づく', examples: [
    { en: 'An interesting question came up.', ja: '興味深い質問が出た。' },
    { en: 'Something urgent came up at work.', ja: '仕事で緊急事態が発生した。' },
    { en: 'Summer is coming up fast this year.', ja: '今年は夏がすぐそこまで来ている。' },
  ] },
  { verb: 'come', particle: 'across', meaningJa: '偶然見つける、印象を与える', examples: [
    { en: 'I came across an old photo.', ja: '古い写真を偶然見つけた。' },
    { en: 'He comes across as very confident.', ja: '彼はとても自信があるように見える。' },
    { en: 'I came across an interesting article yesterday.', ja: '昨日興味深い記事を偶然見つけた。' },
  ] },
  { verb: 'come', particle: 'back', meaningJa: '戻る', examples: [
    { en: 'When will you come back?', ja: 'いつ戻ってきますか。' },
    { en: 'She promised to come back before dinner.', ja: '彼女は夕食前に戻ると約束した。' },
    { en: 'Old fashions sometimes come back into style.', ja: '昔の流行が時々また流行することがある。' },
  ] },
  { verb: 'come', particle: 'from', meaningJa: '出身である', examples: [
    { en: 'Where do you come from?', ja: 'どこの出身ですか。' },
    { en: 'This word comes from an old French term.', ja: 'この単語は古いフランス語の言葉に由来する。' },
    { en: 'Most of our vegetables come from local farms.', ja: '私たちの野菜のほとんどは地元の農場から来ている。' },
  ] },
  { verb: 'come', particle: 'on', meaningJa: 'さあ、急ぐ、始まる', examples: [
    { en: 'Come on, we are going to be late.', ja: 'さあ、遅れちゃうよ。' },
    { en: 'The rain came on suddenly during the picnic.', ja: 'ピクニックの最中に突然雨が降り出した。' },
    { en: 'Come on, you can do it!', ja: 'さあ、君ならできる！' },
  ] },
  { verb: 'come', particle: 'off', meaningJa: '取れる、はがれる', examples: [
    { en: 'The button came off my shirt.', ja: 'シャツのボタンが取れた。' },
    { en: 'The paint is starting to come off the wall.', ja: '壁のペンキがはがれ始めている。' },
    { en: 'The plan came off exactly as we hoped.', ja: 'その計画は望んでいた通りにうまくいった。' },
  ] },
  { verb: 'come', particle: 'to', meaningJa: '意識を取り戻す、合計になる', examples: [
    { en: 'The total comes to fifty dollars.', ja: '合計で50ドルになります。' },
    { en: 'She slowly came to after fainting.', ja: '彼女は気絶した後、ゆっくりと意識を取り戻した。' },
    { en: 'It all comes to the same thing in the end.', ja: '結局それは全部同じことになる。' },
  ] },
  { verb: 'go', particle: 'on', meaningJa: '続く、起こる', examples: [
    { en: 'What is going on here?', ja: 'ここで何が起こっているの？' },
    { en: 'The meeting went on for three hours.', ja: '会議は3時間続いた。' },
    { en: 'Please go on with your story.', ja: 'どうぞ話を続けてください。' },
  ] },
  { verb: 'go', particle: 'out', meaningJa: '外出する、消える', examples: [
    { en: "Let's go out for dinner tonight.", ja: '今夜は夕食に出かけよう。' },
    { en: 'The candle went out in the wind.', ja: 'ろうそくは風で消えた。' },
    { en: 'She went out with friends last weekend.', ja: '彼女は先週末友達と出かけた。' },
  ] },
  { verb: 'go', particle: 'off', meaningJa: '鳴る、爆発する、腐る', examples: [
    { en: 'The alarm went off at 6 AM.', ja: 'アラームが朝6時に鳴った。' },
    { en: 'The bomb went off without warning.', ja: '爆弾は警告なしに爆発した。' },
    { en: "This milk has gone off, don't drink it.", ja: 'この牛乳は腐っているから飲まないで。' },
  ] },
  { verb: 'go', particle: 'up', meaningJa: '上がる、上昇する', examples: [
    { en: 'Gas prices have gone up again.', ja: 'ガソリン価格がまた上がった。' },
    { en: 'We watched the balloon go up into the sky.', ja: '私たちは風船が空に上がっていくのを見た。' },
    { en: 'House prices went up sharply last year.', ja: '昨年、住宅価格が急上昇した。' },
  ] },
  { verb: 'go', particle: 'down', meaningJa: '下がる、沈む', examples: [
    { en: 'The sun goes down in the west.', ja: '太陽は西に沈む。' },
    { en: 'Prices usually go down after the holiday season.', ja: '休暇シーズンの後は通常価格が下がる。' },
    { en: 'The ship slowly went down into the sea.', ja: '船はゆっくりと海に沈んでいった。' },
  ] },
  { verb: 'go', particle: 'through', meaningJa: '経験する、目を通す', examples: [
    { en: 'She went through a difficult time.', ja: '彼女はつらい時期を経験した。' },
    { en: 'Let me go through the details with you.', ja: '詳細について一緒に確認させてください。' },
    { en: 'He went through a lot of trouble to help us.', ja: '彼は私たちを助けるために多くの苦労をした。' },
  ] },
  { verb: 'go', particle: 'back', meaningJa: '戻る', examples: [
    { en: 'I have to go back to the office.', ja: 'オフィスに戻らなければならない。' },
    { en: "Let's go back to what we were discussing.", ja: '話していたことに戻りましょう。' },
    { en: 'She wants to go back to school someday.', ja: '彼女はいつか学校に戻りたいと思っている。' },
  ] },
  { verb: 'go', particle: 'along', meaningJa: '賛成する、一緒に行く', examples: [
    { en: "I'll go along with your plan.", ja: 'あなたの計画に賛成します。' },
    { en: 'He decided to go along with the group.', ja: '彼はグループと一緒に行くことにした。' },
    { en: "We'll figure out the details as we go along.", ja: '進めながら詳細を決めていきましょう。' },
  ] },
  { verb: 'go', particle: 'without', meaningJa: 'なしで済ます', examples: [
    { en: "We can't go without water.", ja: '私たちは水なしではやっていけない。' },
    { en: 'She went without sleep for two days.', ja: '彼女は二日間眠らずに過ごした。' },
    { en: 'I can go without coffee for a day.', ja: '一日ならコーヒーなしでも大丈夫だ。' },
  ] },
  { verb: 'go', particle: 'over', meaningJa: '確認する、復習する', examples: [
    { en: "Let's go over the details once more.", ja: 'もう一度詳細を確認しましょう。' },
    { en: 'The teacher went over the homework answers.', ja: '先生は宿題の答えを確認した。' },
    { en: 'I need to go over my notes before the exam.', ja: '試験前にノートを見直す必要がある。' },
  ] },
  { verb: 'put', particle: 'on', meaningJa: '着る、身につける', examples: [
    { en: 'Put on your coat before you go out.', ja: '出かける前にコートを着なさい。' },
    { en: 'She put on her glasses to read the letter.', ja: '彼女は手紙を読むために眼鏡をかけた。' },
    { en: 'He put on some music to relax.', ja: '彼はリラックスするために音楽をかけた。' },
  ] },
  { verb: 'put', particle: 'off', meaningJa: '延期する', examples: [
    { en: 'We must put off the meeting until tomorrow.', ja: '会議を明日まで延期しなければならない。' },
    { en: "Don't put off your homework until the last minute.", ja: '宿題を最後の瞬間まで先延ばしにしないで。' },
    { en: 'The trip was put off because of the storm.', ja: '旅行は嵐のために延期された。' },
  ] },
  { verb: 'put', particle: 'up', meaningJa: '建てる、泊める、掲げる', examples: [
    { en: 'They put up a new building.', ja: '彼らは新しい建物を建てた。' },
    { en: 'Can you put me up for the night?', ja: '一晩泊めてもらえますか。' },
    { en: 'She put up posters all around the town.', ja: '彼女は町中にポスターを貼った。' },
  ] },
  { verb: 'put', particle: 'down', meaningJa: '書き留める、下ろす', examples: [
    { en: 'Please put your name down on this list.', ja: 'このリストにお名前を書いてください。' },
    { en: 'He put down his bag and sat on the sofa.', ja: '彼はカバンを下ろしてソファに座った。' },
    { en: 'She put down her thoughts in a diary.', ja: '彼女は自分の考えを日記に書き留めた。' },
  ] },
  { verb: 'put', particle: 'out', meaningJa: '消す、出す', examples: [
    { en: 'Firefighters put out the fire.', ja: '消防士たちは火を消した。' },
    { en: 'She put out the trash before leaving.', ja: '彼女は出かける前にゴミを出した。' },
    { en: 'Please put out your cigarette here.', ja: 'ここでタバコを消してください。' },
  ] },
  { verb: 'put', particle: 'back', meaningJa: '元の場所に戻す', examples: [
    { en: 'Put the book back on the shelf.', ja: '本を棚に戻してください。' },
    { en: 'He put the tools back where he found them.', ja: '彼は道具を見つけた場所に戻した。' },
    { en: 'Could you put the chairs back after the meeting?', ja: '会議の後、椅子を元に戻してもらえますか。' },
  ] },
  { verb: 'put', particle: 'through', meaningJa: '電話をつなぐ、苦しませる', examples: [
    { en: 'Can you put me through to manager?', ja: '部長につないでもらえますか。' },
    { en: 'The scandal put the family through a lot of stress.', ja: 'そのスキャンダルは家族に多くのストレスを与えた。' },
    { en: 'Please put this call through to the sales department.', ja: 'この電話を営業部につないでください。' },
  ] },
  { verb: 'put', particle: 'across', meaningJa: 'わかりやすく伝える', examples: [
    { en: 'He managed to put his idea across.', ja: '彼は自分の考えをうまく伝えることができた。' },
    { en: 'She has a talent for putting complex ideas across simply.', ja: '彼女は複雑な考えをシンプルに伝える才能がある。' },
    { en: 'It is hard to put my feelings across in words.', ja: '自分の気持ちを言葉で伝えるのは難しい。' },
  ] },
  { verb: 'bring', particle: 'up', meaningJa: '育てる、話題を持ち出す', examples: [
    { en: 'She was brought up in Tokyo.', ja: '彼女は東京で育った。' },
    { en: 'He brought up an interesting point during the meeting.', ja: '彼は会議中に興味深い点を持ち出した。' },
    { en: 'They brought up their children to be kind.', ja: '彼らは子供たちを優しい人になるよう育てた。' },
  ] },
  { verb: 'bring', particle: 'out', meaningJa: '発売する、引き出す', examples: [
    { en: 'The company brought out a new smartphone.', ja: 'その会社は新しいスマートフォンを発売した。' },
    { en: 'Her coach helped bring out her true potential.', ja: '彼女のコーチは彼女の本当の可能性を引き出す手助けをした。' },
    { en: 'The publisher will bring out the book next month.', ja: '出版社は来月その本を出版する。' },
  ] },
  { verb: 'bring', particle: 'about', meaningJa: '引き起こす、もたらす', examples: [
    { en: 'Technology brought about huge changes.', ja: '技術は大きな変化をもたらした。' },
    { en: 'The new policy brought about unexpected results.', ja: 'その新しい政策は予期しない結果をもたらした。' },
    { en: "What brought about the sudden change in his attitude?", ja: '何が彼の態度の急な変化を引き起こしたのですか。' },
  ] },
  { verb: 'bring', particle: 'back', meaningJa: '思い出させる、持ち帰る', examples: [
    { en: 'This song brings back memories.', ja: 'この歌は思い出を蘇らせる。' },
    { en: 'Please bring back some souvenirs from your trip.', ja: '旅行からお土産を持って帰ってきてね。' },
    { en: 'The smell of rain brings back my childhood.', ja: '雨の匂いは私の子供時代を思い出させる。' },
  ] },
  { verb: 'bring', particle: 'down', meaningJa: '下げる、倒す', examples: [
    { en: 'The government was brought down.', ja: '政府は倒された。' },
    { en: 'The new policy helped bring down inflation.', ja: '新しい政策はインフレを下げるのに役立った。' },
    { en: "Scandal after scandal brought down the company's reputation.", ja: '相次ぐスキャンダルが会社の評判を落とした。' },
  ] },
  { verb: 'call', particle: 'back', meaningJa: '折り返し電話する', examples: [
    { en: 'I will call you back later.', ja: '後で折り返し電話します。' },
    { en: 'She called back as soon as she got the message.', ja: '彼女はメッセージを受け取るとすぐに折り返した。' },
    { en: 'Can you call me back after lunch?', ja: '昼食後に折り返してもらえますか。' },
  ] },
  { verb: 'call', particle: 'off', meaningJa: '中止する', examples: [
    { en: 'The match was called off due to rain.', ja: '試合は雨のため中止になった。' },
    { en: 'They called off the wedding at the last minute.', ja: '彼らは土壇場で結婚式を中止した。' },
    { en: 'We had to call off the picnic because of the storm.', ja: '嵐のためピクニックを中止せざるを得なかった。' },
  ] },
  { verb: 'call', particle: 'out', meaningJa: '大声で叫ぶ', examples: [
    { en: 'He called out my name.', ja: '彼は私の名前を大声で呼んだ。' },
    { en: 'She called out for help.', ja: '彼女は助けを求めて叫んだ。' },
    { en: "The teacher called out the students' names one by one.", ja: '先生は生徒たちの名前を一人ずつ呼び上げた。' },
  ] },
  { verb: 'call', particle: 'for', meaningJa: '必要とする、要求する', examples: [
    { en: 'This situation calls for immediate action.', ja: 'この状況は即座の対応を必要とする。' },
    { en: 'The recipe calls for two cups of flour.', ja: 'そのレシピは小麦粉2カップを必要とする。' },
    { en: "The protesters called for the leader's resignation.", ja: '抗議者たちは指導者の辞任を要求した。' },
  ] },
  { verb: 'call', particle: 'on', meaningJa: '訪問する、求める', examples: [
    { en: 'I will call on my grandparents.', ja: '祖父母を訪ねます。' },
    { en: 'The teacher called on a student to answer the question.', ja: '先生は質問に答えるよう生徒を指名した。' },
    { en: 'We may need to call on you for help later.', ja: '後であなたに助けを求めるかもしれません。' },
  ] },
  { verb: 'keep', particle: 'on', meaningJa: '続け る', examples: [
    { en: 'Keep on trying and you will succeed.', ja: '続けて挑戦すれば成功するよ。' },
    { en: 'She kept on smiling despite the bad news.', ja: '彼女は悪い知らせにもかかわらず笑顔を続けた。' },
    { en: 'He kept on working late every night that week.', ja: '彼はその週、毎晩遅くまで働き続けた。' },
  ] },
  { verb: 'keep', particle: 'up', meaningJa: '維持する、遅れずについていく', examples: [
    { en: 'Keep up the good work.', ja: 'その調子で頑張って。' },
    { en: "I couldn't keep up with the fast pace of the class.", ja: '授業の速いペースについていけなかった。' },
    { en: 'She keeps up with the latest fashion trends.', ja: '彼女は最新のファッショントレンドについていっている。' },
  ] },
  { verb: 'keep', particle: 'out', meaningJa: '立ち入らない', examples: [
    { en: 'Keep out of this room.', ja: 'この部屋に入らないで。' },
    { en: 'The sign said "Keep Out" on the fence.', ja: 'フェンスには「立入禁止」と書かれていた。' },
    { en: 'We built a fence to keep out stray animals.', ja: '野良動物を締め出すために柵を作った。' },
  ] },
  { verb: 'keep', particle: 'away', meaningJa: '近づかない', examples: [
    { en: 'Keep away from the edge.', ja: '端に近づかないで。' },
    { en: 'Keep the medicine away from children.', ja: '薬は子供の手の届かないところに保管してください。' },
    { en: 'She keeps away from crowded places these days.', ja: '彼女は最近人混みを避けている。' },
  ] },
  { verb: 'keep', particle: 'back', meaningJa: '抑える、下がらせる', examples: [
    { en: 'Keep back from the train platform.', ja: 'ホームから下がってください。' },
    { en: "He couldn't keep back his anger any longer.", ja: '彼はもうこれ以上怒りを抑えられなかった。' },
    { en: 'The police kept the crowd back from the accident scene.', ja: '警察は群衆を事故現場から遠ざけた。' },
  ] },
  { verb: 'keep', particle: 'in', meaningJa: '中に閉じ込めておく、控える', examples: [
    { en: 'Keep the dog in the yard.', ja: '犬を庭に入れておいて。' },
    { en: 'The teacher kept him in after school for talking.', ja: '先生はおしゃべりをしたので彼を放課後に居残りさせた。' },
    { en: 'Try to keep in mind what we discussed today.', ja: '今日話し合ったことを覚えておいてください。' },
  ] },
  { verb: 'hold', particle: 'on', meaningJa: '待つ、しっかり掴まる', examples: [
    { en: 'Hold on a moment, please.', ja: '少々お待ちください。' },
    { en: 'Hold on tight, the road is bumpy.', ja: 'しっかり掴まって、道が凸凹してるから。' },
    { en: 'Just hold on, help is on the way.', ja: '頑張って、助けが向かっているから。' },
  ] },
  { verb: 'hold', particle: 'up', meaningJa: '遅らせる、持ちこたえる', examples: [
    { en: 'Traffic was held up by an accident.', ja: '事故で交通が遅れた。' },
    { en: 'The old bridge is still holding up well.', ja: 'その古い橋はまだしっかりと持ちこたえている。' },
    { en: "Sorry I'm late, I got held up at work.", ja: '遅れてごめん、仕事で足止めされたんだ。' },
  ] },
  { verb: 'hold', particle: 'back', meaningJa: '抑える、隠す', examples: [
    { en: "She couldn't hold back her tears.", ja: '彼女は涙を抑えられなかった。' },
    { en: 'He held back some information from the police.', ja: '彼は警察に一部の情報を隠した。' },
    { en: "Don't hold back, tell me what you really think.", ja: '遠慮しないで、本当に思っていることを教えて。' },
  ] },
  { verb: 'hold', particle: 'out', meaningJa: '持ちこたえる、差し出す', examples: [
    { en: 'How long can they hold out?', ja: '彼らはどのくらい持ちこたえられますか。' },
    { en: 'She held out her hand for a handshake.', ja: '彼女は握手のために手を差し出した。' },
    { en: "Our supplies won't hold out much longer.", ja: '私たちの物資はもう長く持たないだろう。' },
  ] },
  { verb: 'run', particle: 'out', meaningJa: '切らす、使い果たす', examples: [
    { en: 'We have run out of milk.', ja: '牛乳を切らしてしまった。' },
    { en: 'Time is running out to finish the project.', ja: 'プロジェクトを終わらせる時間がなくなってきている。' },
    { en: 'The car ran out of gas on the highway.', ja: '車は高速道路でガス欠になった。' },
  ] },
  { verb: 'run', particle: 'into', meaningJa: '偶然出会う、直面する', examples: [
    { en: 'I ran into an old friend.', ja: '昔の友人に偶然会った。' },
    { en: 'We ran into some trouble with the new system.', ja: '私たちは新しいシステムでいくつかの問題に直面した。' },
    { en: 'She ran into her ex-boyfriend at the mall.', ja: '彼女はモールで元彼に偶然会った。' },
  ] },
  { verb: 'run', particle: 'away', meaningJa: '逃げる', examples: [
    { en: 'The thief ran away from the police.', ja: '泥棒は警察から逃げた。' },
    { en: 'The dog ran away when it heard the thunder.', ja: '犬は雷の音を聞いて逃げ出した。' },
    { en: 'She ran away from home when she was sixteen.', ja: '彼女は16歳の時に家出した。' },
  ] },
  { verb: 'run', particle: 'over', meaningJa: 'ひく、あふれる', examples: [
    { en: 'The bathtub is running over.', ja: '浴槽の水があふれている。' },
    { en: 'Be careful not to get run over by a car.', ja: '車にひかれないように気をつけて。' },
    { en: 'The meeting ran over by twenty minutes.', ja: '会議は20分オーバーした。' },
  ] },
  { verb: 'run', particle: 'through', meaningJa: 'ざっと目を通す、使い果たす', examples: [
    { en: "Let's run through the script.", ja: '台本にざっと目を通しましょう。' },
    { en: 'He ran through his savings within a year.', ja: '彼は一年で貯金を使い果たした。' },
    { en: 'Can we run through the plan one more time?', ja: 'もう一度計画を確認できますか。' },
  ] },
  { verb: 'set', particle: 'up', meaningJa: '設立する、準備する', examples: [
    { en: 'They set up a new company.', ja: '彼らは新しい会社を設立した。' },
    { en: 'We set up the tent before it got dark.', ja: '暗くなる前にテントを設営した。' },
    { en: 'She set up a meeting with the client.', ja: '彼女はクライアントとの会議を設定した。' },
  ] },
  { verb: 'set', particle: 'out', meaningJa: '出発する、着手する', examples: [
    { en: 'They set out on a long journey.', ja: '彼らは長い旅に出発した。' },
    { en: 'We set out to solve the problem together.', ja: '私たちはその問題を一緒に解決しようと着手した。' },
    { en: 'The explorers set out early in the morning.', ja: '探検家たちは朝早く出発した。' },
  ] },
  { verb: 'set', particle: 'off', meaningJa: '出発する、引き起こす', examples: [
    { en: 'We set off early in the morning.', ja: '私たちは朝早く出発した。' },
    { en: 'The news set off a wave of protests.', ja: 'そのニュースは抗議運動の波を引き起こした。' },
    { en: 'A small spark set off the whole explosion.', ja: '小さな火花が爆発全体を引き起こした。' },
  ] },
  { verb: 'set', particle: 'back', meaningJa: '遅らせる、費用がかかる', examples: [
    { en: 'The project was set back by weeks.', ja: 'プロジェクトは数週間遅れた。' },
    { en: 'The repair set him back a few hundred dollars.', ja: 'その修理は彼に数百ドルの出費をさせた。' },
    { en: 'Bad weather set back our construction schedule.', ja: '悪天候が私たちの建設スケジュールを遅らせた。' },
  ] },
  { verb: 'make', particle: 'up', meaningJa: '構成する、化粧する、仲直りする', examples: [
    { en: 'Women make up half of the workforce.', ja: '女性は労働力の半分を占めている。' },
    { en: 'She took a long time to make up before the party.', ja: '彼女はパーティーの前に化粧に長い時間をかけた。' },
    { en: 'They made up after their big fight.', ja: '彼らは大喧嘩の後に仲直りした。' },
  ] },
  { verb: 'make', particle: 'out', meaningJa: '聞き取る、理解する', examples: [
    { en: "I can't make out what he is saying.", ja: '彼が何を言っているのか聞き取れない。' },
    { en: 'It was too dark to make out his face.', ja: '暗すぎて彼の顔がよく見えなかった。' },
    { en: "I couldn't make out the handwriting on the letter.", ja: '手紙の筆跡が読み取れなかった。' },
  ] },
  { verb: 'make', particle: 'for', meaningJa: '〜に向かう、寄与する', examples: [
    { en: 'They made for the nearest exit.', ja: '彼らは一番近い出口に向かった。' },
    { en: 'Good communication makes for a strong relationship.', ja: '良いコミュニケーションは強い関係につながる。' },
    { en: 'We made for the mountains as soon as we packed.', ja: '荷造りが終わるとすぐに私たちは山に向かった。' },
  ] },
  { verb: 'make', particle: 'off', meaningJa: '逃げ出す', examples: [
    { en: 'The burglar made off with the money.', ja: '強盗はお金を持って逃げた。' },
    { en: 'The thieves made off before anyone noticed.', ja: '泥棒たちは誰も気づかないうちに逃げ去った。' },
    { en: 'He made off in a hurry when he saw the police.', ja: '彼は警察を見て急いで逃げた。' },
  ] },
  { verb: 'stand', particle: 'up', meaningJa: '立ち上がる', examples: [
    { en: 'Please stand up when the teacher enters.', ja: '先生が入ってきたら立ち上がってください。' },
    { en: 'He stood up to give his speech.', ja: '彼はスピーチをするために立ち上がった。' },
    { en: 'She stood up for what she believed in.', ja: '彼女は自分が信じることのために立ち向かった。' },
  ] },
  { verb: 'stand', particle: 'out', meaningJa: '目立つ', examples: [
    { en: 'Her bright red dress stood out.', ja: '彼女の鮮やかな赤いドレスは目立っていた。' },
    { en: 'His talent really stands out among the other students.', ja: '彼の才能は他の生徒たちの中で本当に目立っている。' },
    { en: 'The tall building stands out in the small town.', ja: 'その高いビルはその小さな町で目立っている。' },
  ] },
  { verb: 'stand', particle: 'for', meaningJa: '表す、意味する、支持する', examples: [
    { en: 'What does WHO stand for?', ja: 'WHOは何を表していますか。' },
    { en: "I won't stand for this kind of behavior.", ja: 'このような振る舞いは容認しません。' },
    { en: 'The flag stands for freedom and unity.', ja: 'その旗は自由と団結を表している。' },
  ] },
  { verb: 'stand', particle: 'by', meaningJa: '待機する、支持する', examples: [
    { en: 'Please stand by for further instructions.', ja: 'さらなる指示があるまでお待ちください。' },
    { en: 'She stood by her husband during the crisis.', ja: '彼女は危機の間、夫を支え続けた。' },
    { en: 'The rescue team stood by in case of an emergency.', ja: '救助隊は緊急事態に備えて待機していた。' },
  ] },
  { verb: 'break', particle: 'down', meaningJa: '故障する、精神的に落ち込む', examples: [
    { en: 'My car broke down on the highway.', ja: '車が高速道路で故障した。' },
    { en: 'She broke down in tears at the news.', ja: '彼女はその知らせに涙を流して取り乱した。' },
    { en: 'The negotiations broke down after several hours.', ja: '交渉は数時間後に決裂した。' },
  ] },
  { verb: 'break', particle: 'up', meaningJa: '解散する、別れる', examples: [
    { en: 'They decided to break up.', ja: '彼らは別れることにした。' },
    { en: 'The meeting broke up early because of the storm.', ja: '会議は嵐のため早めに解散した。' },
    { en: 'The band broke up after ten years together.', ja: 'そのバンドは10年間一緒に活動した後解散した。' },
  ] },
  { verb: 'break', particle: 'out', meaningJa: '勃発する、突然始まる', examples: [
    { en: 'A fire broke out during the night.', ja: '夜中に火事が発生した。' },
    { en: 'War broke out between the two countries.', ja: '二国間で戦争が勃発した。' },
    { en: 'A fight broke out in the crowded bar.', ja: '混雑したバーで喧嘩が起こった。' },
  ] },
  { verb: 'break', particle: 'in', meaningJa: '慣らす、侵入する', examples: [
    { en: 'I need to break in my new shoes.', ja: '新しい靴を履き慣らす必要がある。' },
    { en: 'Someone broke in while we were on vacation.', ja: '私たちが休暇中に誰かが侵入した。' },
    { en: 'It takes time to break in a new employee.', ja: '新入社員に慣れてもらうには時間がかかる。' },
  ] },
  { verb: 'break', particle: 'through', meaningJa: '突破する', examples: [
    { en: 'The sun broke through the clouds.', ja: '太陽が雲の間から現れた。' },
    { en: 'Scientists finally broke through in their research.', ja: '科学者たちはついに研究で突破口を開いた。' },
    { en: "The army broke through the enemy's defenses.", ja: '軍隊は敵の防衛線を突破した。' },
  ] },
  { verb: 'catch', particle: 'up', meaningJa: '追いつく', examples: [
    { en: 'Walk slower so I can catch up.', ja: 'もっとゆっくり歩いて、追いつけるように。' },
    { en: "Let's catch up over coffee sometime.", ja: 'いつかコーヒーでも飲みながら近況を話そう。' },
    { en: 'I need to catch up on my sleep this weekend.', ja: '今週末は睡眠不足を解消する必要がある。' },
  ] },
  { verb: 'catch', particle: 'on', meaningJa: '人気が出る、理解する', examples: [
    { en: 'The new fashion quickly caught on.', ja: 'その新しい流行はすぐに広まった。' },
    { en: 'It took him a while to catch on to the joke.', ja: '彼がその冗談を理解するのに少し時間がかかった。' },
    { en: 'This trend is starting to catch on among teenagers.', ja: 'このトレンドはティーンエイジャーの間で流行り始めている。' },
  ] },
  { verb: 'catch', particle: 'out', meaningJa: '意表をつく、粗を見つける', examples: [
    { en: 'He was caught out in a lie.', ja: '彼は嘘をついているのがばれた。' },
    { en: 'The tricky question caught out many students.', ja: 'その難しい質問は多くの生徒を戸惑わせた。' },
    { en: 'She was caught out by the sudden change in weather.', ja: '彼女は天候の急変にやられてしまった。' },
  ] },
  { verb: 'check', particle: 'in', meaningJa: 'チェックインする、手続きをする', examples: [
    { en: 'We need to check in at the hotel.', ja: 'ホテルにチェックインする必要がある。' },
    { en: 'Please check in online before your flight.', ja: 'フライトの前にオンラインでチェックインしてください。' },
    { en: "I'll check in with you later to see how it went.", ja: '後でどうだったか様子を聞かせてもらいます。' },
  ] },
  { verb: 'check', particle: 'out', meaningJa: 'チェックアウトする、確認する', examples: [
    { en: 'Check out this cool website.', ja: 'このかっこいいウェブサイトを見てみて。' },
    { en: 'We need to check out of the hotel by noon.', ja: '正午までにホテルをチェックアウトする必要がある。' },
    { en: "Let's check out that new restaurant downtown.", ja: 'ダウンタウンの新しいレストランに行ってみよう。' },
  ] },
  { verb: 'check', particle: 'up', meaningJa: '調べる、点検する', examples: [
    { en: 'I want to check up on his progress.', ja: '彼の進捗を確認したい。' },
    { en: 'She checks up on her elderly neighbor every day.', ja: '彼女は毎日高齢の隣人の様子を確認している。' },
    { en: 'The mechanic checked up on the engine before the trip.', ja: '整備士は旅行前にエンジンを点検した。' },
  ] },
  { verb: 'drop', particle: 'out', meaningJa: '中退する、脱落する', examples: [
    { en: 'He dropped out of university.', ja: '彼は大学を中退した。' },
    { en: 'Several runners dropped out due to the heat.', ja: '何人かのランナーが暑さのために棄権した。' },
    { en: 'She almost dropped out of the competition.', ja: '彼女はもう少しで競技を棄権するところだった。' },
  ] },
  { verb: 'drop', particle: 'off', meaningJa: '降ろす、うとうとする', examples: [
    { en: 'Can you drop me off at the station?', ja: '駅で降ろしてもらえますか。' },
    { en: 'He dropped off during the boring lecture.', ja: '彼は退屈な講義中にうとうとした。' },
    { en: "I'll drop the kids off at school on my way to work.", ja: '出勤途中に子供たちを学校に送ります。' },
  ] },
  { verb: 'drop', particle: 'in', meaningJa: '立ち寄る', examples: [
    { en: 'Feel free to drop in anytime.', ja: 'いつでも気軽に立ち寄ってください。' },
    { en: 'She dropped in to say hello on her way home.', ja: '彼女は帰り道に挨拶をしに立ち寄った。' },
    { en: 'We might drop in at the party for a bit.', ja: 'パーティーにちょっと顔を出すかもしれない。' },
  ] },
  { verb: 'fall', particle: 'apart', meaningJa: 'バラバラになる、崩壊する', examples: [
    { en: 'The old book is falling apart.', ja: 'その古い本はバラバラになりかけている。' },
    { en: 'Their marriage began to fall apart after years of stress.', ja: '何年ものストレスの後、彼らの結婚生活は崩壊し始めた。' },
    { en: 'The whole plan fell apart at the last minute.', ja: '計画全体が土壇場で崩れてしまった。' },
  ] },
  { verb: 'fall', particle: 'behind', meaningJa: '遅れを取る', examples: [
    { en: "Don't fall behind in your studies.", ja: '勉強で遅れを取らないように。' },
    { en: 'He fell behind on his rent payments.', ja: '彼は家賃の支払いが遅れた。' },
    { en: 'The team fell behind by ten points in the first half.', ja: 'チームは前半で10点差をつけられた。' },
  ] },
  { verb: 'fall', particle: 'for', meaningJa: 'だまされる、恋に落ちる', examples: [
    { en: 'I fell for his trick.', ja: '私は彼の策略にだまされた。' },
    { en: 'She fell for him the moment they met.', ja: '彼女は出会った瞬間に彼に恋をした。' },
    { en: "Don't fall for that scam email.", ja: 'その詐欺メールにだまされないで。' },
  ] },
  { verb: 'fall', particle: 'out', meaningJa: '喧嘩する、仲たがいする', examples: [
    { en: 'They fell out over money.', ja: '彼らはお金のことで仲たがいした。' },
    { en: 'The two brothers fell out years ago.', ja: 'その二人の兄弟は何年も前に仲たがいした。' },
    { en: 'She fell out with her best friend last month.', ja: '彼女は先月親友と喧嘩別れした。' },
  ] },
  { verb: 'fill', particle: 'out', meaningJa: '記入する', examples: [
    { en: 'Please fill out this application form.', ja: 'この申込書に記入してください。' },
    { en: 'He filled out the survey and returned it.', ja: '彼はアンケートに記入して返送した。' },
    { en: 'You need to fill out these documents before the interview.', ja: '面接の前にこれらの書類に記入する必要があります。' },
  ] },
  { verb: 'fill', particle: 'in', meaningJa: '書き込む、穴埋めする', examples: [
    { en: 'Fill in the blanks with correct words.', ja: '正しい単語で空欄を埋めてください。' },
    { en: 'Can you fill in for me at the meeting tomorrow?', ja: '明日の会議で私の代わりをしてもらえますか。' },
    { en: 'She filled in the missing details in the report.', ja: '彼女は報告書の欠けている詳細を書き足した。' },
  ] },
  { verb: 'fill', particle: 'up', meaningJa: '満たす', examples: [
    { en: 'Fill up the tank with gas, please.', ja: 'タンクにガソリンを満タンにしてください。' },
    { en: 'The stadium filled up quickly before the game.', ja: '試合前にスタジアムはすぐに満員になった。' },
    { en: 'Her eyes filled up with tears of joy.', ja: '彼女の目は喜びの涙でいっぱいになった。' },
  ] },
  { verb: 'find', particle: 'out', meaningJa: '見つけ出す、知る', examples: [
    { en: 'We need to find out the truth.', ja: '私たちは真実を知る必要がある。' },
    { en: 'I found out about the party from a friend.', ja: '友人からパーティーのことを聞いた。' },
    { en: 'How did you find out my phone number?', ja: 'どうやって私の電話番号を知ったのですか。' },
  ] },
  { verb: 'grow', particle: 'up', meaningJa: '成長する、大人になる', examples: [
    { en: 'He grew up in a small town.', ja: '彼は小さな町で育った。' },
    { en: 'What do you want to be when you grow up?', ja: '大人になったら何になりたいですか。' },
    { en: 'The children grew up quickly during those years.', ja: '子供たちはその年月で急速に成長した。' },
  ] },
  { verb: 'grow', particle: 'out', meaningJa: '成長して合わなくなる', examples: [
    { en: 'He grew out of his shoes.', ja: '彼は成長して靴が合わなくなった。' },
    { en: 'Kids grow out of their clothes so fast.', ja: '子供たちはあっという間に服が合わなくなる。' },
    { en: "She hopes he'll grow out of his shyness.", ja: '彼女は彼が成長して内気さがなくなることを願っている。' },
  ] },
  { verb: 'hang', particle: 'up', meaningJa: '電話を切る', examples: [
    { en: "Don't hang up yet.", ja: 'まだ電話を切らないで。' },
    { en: 'She hung up the phone in anger.', ja: '彼女は怒って電話を切った。' },
    { en: 'He hung up his coat by the door.', ja: '彼はドアのそばにコートを掛けた。' },
  ] },
  { verb: 'hang', particle: 'on', meaningJa: '待つ、しがみつく', examples: [
    { en: 'Hang on a second.', ja: 'ちょっと待って。' },
    { en: "Hang on tight, we're going fast!", ja: 'しっかりつかまって、速く行くよ！' },
    { en: 'She hung on to hope even in hard times.', ja: '彼女は困難な時でも希望にすがりついた。' },
  ] },
  { verb: 'hang', particle: 'out', meaningJa: 'ぶらつく、遊ぶ', examples: [
    { en: 'Where do you usually hang out?', ja: '普段どこでぶらぶらしているの？' },
    { en: 'We hung out at the beach all afternoon.', ja: '私たちは午後ずっとビーチでのんびり過ごした。' },
    { en: 'Do you want to hang out this weekend?', ja: '今週末遊びに行かない？' },
  ] },
  { verb: 'hear', particle: 'from', meaningJa: '便りがある、連絡を受ける', examples: [
    { en: "I haven't heard from him lately.", ja: '最近彼から連絡がない。' },
    { en: 'We finally heard from the company about the job.', ja: 'ついにその仕事について会社から連絡があった。' },
    { en: 'Let me know if you hear from her.', ja: '彼女から連絡があったら教えてね。' },
  ] },
  { verb: 'hear', particle: 'of', meaningJa: '耳にする、知っている', examples: [
    { en: 'Have you ever heard of this band?', ja: 'このバンドを聞いたことがありますか。' },
    { en: "I've never heard of that restaurant before.", ja: 'そのレストランは聞いたことがない。' },
    { en: 'Everyone has heard of that famous painter.', ja: 'みんなその有名な画家のことを知っている。' },
  ] },
  { verb: 'leave', particle: 'out', meaningJa: '省く、除外する', examples: [
    { en: 'You left out an important detail.', ja: '大事な詳細を抜かしましたね。' },
    { en: "Please don't leave anyone out of the invitation.", ja: '誰も招待から漏らさないでください。' },
    { en: 'The report leaves out several key facts.', ja: 'その報告書はいくつかの重要な事実を省いている。' },
  ] },
  { verb: 'leave', particle: 'behind', meaningJa: '置き忘れる、置いていく', examples: [
    { en: "Don't leave your umbrella behind.", ja: '傘を置き忘れないで。' },
    { en: 'He left behind a successful career to travel the world.', ja: '彼は世界を旅するために成功したキャリアを捨てた。' },
    { en: 'We had to leave some luggage behind at the airport.', ja: '空港で荷物の一部を置いていかなければならなかった。' },
  ] },
  { verb: 'let', particle: 'down', meaningJa: 'がっかりさせる', examples: [
    { en: "I won't let you down.", ja: 'あなたをがっかりさせません。' },
    { en: 'He felt let down by his best friend.', ja: '彼は親友にがっかりさせられたと感じた。' },
    { en: "The movie's ending really let me down.", ja: 'その映画の結末には本当にがっかりした。' },
  ] },
  { verb: 'let', particle: 'in', meaningJa: '中に入れる', examples: [
    { en: 'Open the door and let him in.', ja: 'ドアを開けて彼を中に入れて。' },
    { en: 'The old window lets in a lot of cold air.', ja: 'その古い窓からは冷たい空気がたくさん入ってくる。' },
    { en: 'Could you let the cat in?', ja: '猫を中に入れてもらえますか。' },
  ] },
  { verb: 'let', particle: 'out', meaningJa: '外に出す、もらす', examples: [
    { en: "Don't let out the secret.", ja: '秘密を漏らさないで。' },
    { en: 'She let the dog out into the yard.', ja: '彼女は犬を庭に出した。' },
    { en: 'He let out a loud laugh.', ja: '彼は大声で笑い出した。' },
  ] },
  { verb: 'pass', particle: 'away', meaningJa: '亡くなる', examples: [
    { en: 'His grandfather passed away last year.', ja: '彼の祖父は去年亡くなった。' },
    { en: 'She passed away peacefully in her sleep.', ja: '彼女は眠るように安らかに亡くなった。' },
    { en: 'Many people mourned when the beloved actor passed away.', ja: '愛された俳優が亡くなった時、多くの人が悲しんだ。' },
  ] },
  { verb: 'pass', particle: 'out', meaningJa: '気絶する、配る', examples: [
    { en: 'He passed out from the heat.', ja: '彼は暑さで気を失った。' },
    { en: 'The teacher passed out the exam papers.', ja: '先生は試験用紙を配った。' },
    { en: 'She almost passed out from exhaustion.', ja: '彼女は疲労でほとんど気を失いそうだった。' },
  ] },
  { verb: 'pass', particle: 'on', meaningJa: '伝える、渡す', examples: [
    { en: 'Please pass on this message.', ja: 'このメッセージを伝えてください。' },
    { en: 'He passed on his knowledge to the next generation.', ja: '彼は自分の知識を次の世代に伝えた。' },
    { en: 'Could you pass on my thanks to the team?', ja: 'チームに私の感謝を伝えてもらえますか。' },
  ] },
  { verb: 'pay', particle: 'back', meaningJa: '返す、借金を返済する', examples: [
    { en: 'I will pay you back tomorrow.', ja: '明日返します。' },
    { en: 'It took her years to pay back the loan.', ja: '彼女がローンを返済するのに何年もかかった。' },
    { en: 'He promised to pay back every penny he owed.', ja: '彼は借りたお金を一円残らず返すと約束した。' },
  ] },
  { verb: 'pay', particle: 'attention', meaningJa: '注意を払う', examples: [
    { en: 'Pay attention to the teacher.', ja: '先生に注意を払いなさい。' },
    { en: 'Please pay attention while I explain the rules.', ja: 'ルールを説明する間、注意して聞いてください。' },
    { en: "He didn't pay attention to the warning signs.", ja: '彼は警告のサインに注意を払わなかった。' },
  ] },
  { verb: 'pick', particle: 'up', meaningJa: '拾い上げる、車で迎えに行く', examples: [
    { en: 'Can you pick me up at the station?', ja: '駅まで迎えに来てもらえますか。' },
    { en: 'She picked up the phone on the second ring.', ja: '彼女は2回目の呼び出し音で電話に出た。' },
    { en: 'I need to pick up some groceries after work.', ja: '仕事の後で食料品を買いに行く必要がある。' },
  ] },
  { verb: 'pick', particle: 'out', meaningJa: '選び出す', examples: [
    { en: 'Pick out the best one.', ja: '一番良いものを選んで。' },
    { en: 'She helped me pick out a dress for the party.', ja: '彼女はパーティー用のドレスを選ぶのを手伝ってくれた。' },
    { en: "He picked out a gift for his mother's birthday.", ja: '彼は母親の誕生日プレゼントを選んだ。' },
  ] },
  { verb: 'point', particle: 'out', meaningJa: '指摘する', examples: [
    { en: 'She pointed out the mistake in the report.', ja: '彼女は報告書の間違いを指摘した。' },
    { en: 'He kindly pointed out a better solution.', ja: '彼は親切にもより良い解決策を指摘してくれた。' },
    { en: 'The teacher pointed out several errors in my essay.', ja: '先生は私のエッセイのいくつかの誤りを指摘した。' },
  ] },
  { verb: 'pull', particle: 'out', meaningJa: '引き抜く、車を発進させる', examples: [
    { en: 'The train is pulling out of the station.', ja: '電車が駅を出発しようとしている。' },
    { en: 'He pulled out a chair for her.', ja: '彼は彼女のために椅子を引いてあげた。' },
    { en: 'The company decided to pull out of the deal.', ja: 'その会社はその取引から手を引くことに決めた。' },
  ] },
  { verb: 'pull', particle: 'through', meaningJa: '切り抜ける、回復する', examples: [
    { en: 'He managed to pull through the illness.', ja: '彼はなんとか病気を切り抜けた。' },
    { en: 'The doctors think she will pull through.', ja: '医者たちは彼女が回復すると考えている。' },
    { en: "With the team's support, the company pulled through the crisis.", ja: 'チームのサポートのおかげで会社は危機を乗り切った。' },
  ] },
  { verb: 'search', particle: 'for', meaningJa: '探し求める', examples: [
    { en: 'They are searching for clues.', ja: '彼らは手がかりを探している。' },
    { en: 'She is searching for the perfect wedding dress.', ja: '彼女は完璧なウェディングドレスを探している。' },
    { en: "We searched for hours but couldn't find the ring.", ja: '私たちは何時間も探したが指輪は見つからなかった。' },
  ] },
  { verb: 'see', particle: 'off', meaningJa: '見送る', examples: [
    { en: 'We went to the airport to see him off.', ja: '私たちは彼を見送るために空港へ行った。' },
    { en: 'Her family came to see her off at the station.', ja: '彼女の家族は駅まで見送りに来た。' },
    { en: 'They gathered to see the soldiers off to war.', ja: '彼らは兵士たちを戦争へ見送るために集まった。' },
  ] },
  { verb: 'see', particle: 'through', meaningJa: '見抜く、最後までやり通す', examples: [
    { en: 'I can see through his lies.', ja: '私は彼の嘘を見抜くことができる。' },
    { en: 'She promised to see the project through to the end.', ja: '彼女はそのプロジェクトを最後までやり通すと約束した。' },
    { en: "A good teacher can see through a student's excuses.", ja: '良い先生は生徒の言い訳を見抜くことができる。' },
  ] },
  { verb: 'show', particle: 'up', meaningJa: '現れる、姿を見せる', examples: [
    { en: "He didn't show up for the party.", ja: '彼はパーティーに現れなかった。' },
    { en: 'She showed up an hour late to the meeting.', ja: '彼女は会議に1時間遅れて現れた。' },
    { en: 'Everyone was surprised when he showed up unannounced.', ja: '彼が予告なしに現れたので皆驚いた。' },
  ] },
  { verb: 'show', particle: 'off', meaningJa: '見せびらかす', examples: [
    { en: 'He loves to show off his new car.', ja: '彼は新しい車を見せびらかすのが大好きだ。' },
    { en: 'She was just showing off her new dress.', ja: '彼女はただ新しいドレスを見せびらかしていただけだ。' },
    { en: 'Stop showing off and help us with the work.', ja: '見せびらかすのをやめて仕事を手伝って。' },
  ] },
  { verb: 'shut', particle: 'down', meaningJa: '閉鎖する、シャットダウンする', examples: [
    { en: 'The factory was shut down.', ja: 'その工場は閉鎖された。' },
    { en: 'Please shut down your computer before leaving.', ja: '帰る前にパソコンをシャットダウンしてください。' },
    { en: 'The government shut down several unsafe businesses.', ja: '政府はいくつかの安全でない事業を閉鎖した。' },
  ] },
  { verb: 'shut', particle: 'up', meaningJa: '黙る、黙らせる', examples: [
    { en: 'Just shut up and listen.', ja: '黙って聞いて。' },
    { en: 'He told the noisy kids to shut up.', ja: '彼はうるさい子供たちに黙るように言った。' },
    { en: "She couldn't get him to shut up about his trip.", ja: '彼女は彼の旅行の話を黙らせることができなかった。' },
  ] },
  { verb: 'sit', particle: 'down', meaningJa: '座る', examples: [
    { en: 'Please sit down.', ja: '座ってください。' },
    { en: 'He sat down next to me on the train.', ja: '彼は電車で私の隣に座った。' },
    { en: "Let's sit down and talk about this calmly.", ja: '座って冷静にこのことについて話しましょう。' },
  ] },
  { verb: 'sleep', particle: 'in', meaningJa: '朝寝坊する', examples: [
    { en: 'I love to sleep in on weekends.', ja: '週末は朝寝坊するのが大好きだ。' },
    { en: 'We decided to sleep in since we had no plans.', ja: '予定がなかったので朝寝坊することにした。' },
    { en: "Don't sleep in too late, we have work to do.", ja: '寝坊しすぎないで、やることがあるから。' },
  ] },
  { verb: 'speak', particle: 'up', meaningJa: 'はっきり話す、意見を言う', examples: [
    { en: 'Please speak up so everyone can hear.', ja: 'みんなに聞こえるようにはっきり話してください。' },
    { en: 'You should speak up if you disagree.', ja: '反対なら意見を言うべきだ。' },
    { en: 'She finally spoke up about the unfair treatment.', ja: '彼女はついに不公平な扱いについて声を上げた。' },
  ] },
  { verb: 'spend', particle: 'on', meaningJa: '〜にお金を使う', examples: [
    { en: 'He spends a lot on books.', ja: '彼は本にたくさんお金を使う。' },
    { en: "We shouldn't spend so much on unnecessary things.", ja: '不必要なものにそんなにお金を使うべきではない。' },
    { en: 'How much do you spend on groceries each month?', ja: '毎月食料品にいくら使いますか。' },
  ] },
  { verb: 'stay', particle: 'up', meaningJa: '夜更かしする', examples: [
    { en: 'I stayed up late watching movies.', ja: '映画を見ながら夜更かしした。' },
    { en: 'She stayed up all night studying for the exam.', ja: '彼女は試験勉強のために一晩中起きていた。' },
    { en: "Don't stay up too late, you need rest.", ja: 'あまり夜更かしをしないで、休息が必要だから。' },
  ] },
  { verb: 'stay', particle: 'away', meaningJa: '離れている', examples: [
    { en: 'Stay away from danger.', ja: '危険から離れていなさい。' },
    { en: 'He decided to stay away from sugar for a month.', ja: '彼は一ヶ月間砂糖を控えることにした。' },
    { en: 'Please stay away from that neighborhood at night.', ja: '夜はその地域に近づかないでください。' },
  ] },
  { verb: 'step', particle: 'down', meaningJa: '辞任する、退く', examples: [
    { en: 'The CEO decided to step down.', ja: 'CEOは辞任することを決めた。' },
    { en: 'He stepped down from his position after the scandal.', ja: '彼はスキャンダルの後にその地位から退いた。' },
    { en: 'She will step down as team leader next month.', ja: '彼女は来月チームリーダーを退任する。' },
  ] },
  { verb: 'step', particle: 'up', meaningJa: '強化する、進み出る', examples: [
    { en: 'We need to step up our efforts.', ja: '私たちは努力を強化する必要がある。' },
    { en: 'Someone needs to step up and take charge.', ja: '誰かが進み出て責任を取る必要がある。' },
    { en: 'The company stepped up security after the incident.', ja: 'その会社はその事件の後、警備を強化した。' },
  ] },
  { verb: 'stick', particle: 'to', meaningJa: '固執する、やり通す', examples: [
    { en: 'Stick to your plan.', ja: '自分の計画を貫きなさい。' },
    { en: 'He always sticks to his principles.', ja: '彼はいつも自分の原則を貫く。' },
    { en: "Let's stick to the schedule we agreed on.", ja: '私たちが合意したスケジュールを守りましょう。' },
  ] },
  { verb: 'stick', particle: 'out', meaningJa: '突き出る、目立つ', examples: [
    { en: 'His ears stick out slightly.', ja: '彼の耳は少し突き出ている。' },
    { en: 'Her talent really sticks out among her classmates.', ja: '彼女の才能はクラスメートの中で本当に目立っている。' },
    { en: 'A nail was sticking out of the old wooden fence.', ja: '古い木製のフェンスから釘が突き出ていた。' },
  ] },
  { verb: 'switch', particle: 'on', meaningJa: 'スイッチを入れる', examples: [
    { en: 'Switch on the TV.', ja: 'テレビをつけて。' },
    { en: 'She switched on the heater when it got cold.', ja: '寒くなったので彼女はヒーターをつけた。' },
    { en: 'He switched on his laptop to check his emails.', ja: '彼はメールを確認するためにノートパソコンを起動した。' },
  ] },
  { verb: 'switch', particle: 'off', meaningJa: 'スイッチを切る', examples: [
    { en: 'Switch off the lights.', ja: '電気を消して。' },
    { en: 'Remember to switch off the stove before you leave.', ja: '出かける前にコンロを消すのを忘れずに。' },
    { en: 'He switched off his phone during the movie.', ja: '彼は映画の間、携帯の電源を切った。' },
  ] },
  { verb: 'think', particle: 'over', meaningJa: 'じっくり考える', examples: [
    { en: 'Let me think over your proposal.', ja: 'あなたの提案をじっくり考えさせてください。' },
    { en: 'She needs some time to think it over.', ja: '彼女はそれをじっくり考えるための時間が必要だ。' },
    { en: "I'll think over the offer and let you know tomorrow.", ja: 'その申し出をじっくり考えて明日お知らせします。' },
  ] },
  { verb: 'think', particle: 'about', meaningJa: '考える', examples: [
    { en: 'Think about what you did.', ja: '自分がしたことについて考えなさい。' },
    { en: 'I often think about my future career.', ja: '私はよく将来のキャリアについて考える。' },
    { en: 'We should think about how this affects everyone.', ja: 'これがみんなにどう影響するか考えるべきだ。' },
  ] },
  { verb: 'throw', particle: 'away', meaningJa: '捨てる', examples: [
    { en: "Don't throw away this paper.", ja: 'この紙を捨てないで。' },
    { en: 'She threw away her old clothes to make room.', ja: '彼女はスペースを作るために古い服を捨てた。' },
    { en: "You shouldn't throw away a good opportunity like this.", ja: 'このような良い機会を無駄にすべきではない。' },
  ] },
  { verb: 'throw', particle: 'out', meaningJa: '追い出す、捨てる', examples: [
    { en: 'Throw out the garbage.', ja: 'ゴミを捨てて。' },
    { en: 'He was thrown out of the bar for fighting.', ja: '彼は喧嘩をしたのでバーから追い出された。' },
    { en: 'We threw out the broken furniture last weekend.', ja: '私たちは先週末壊れた家具を処分した。' },
  ] },
  { verb: 'try', particle: 'on', meaningJa: '試着する', examples: [
    { en: 'May I try on this jacket?', ja: 'このジャケットを試着してもいいですか。' },
    { en: 'She tried on several pairs of shoes before deciding.', ja: '彼女は決める前にいくつかの靴を試着した。' },
    { en: 'Would you like to try on a different size?', ja: '別のサイズを試着してみますか。' },
  ] },
  { verb: 'try', particle: 'out', meaningJa: '試してみる', examples: [
    { en: "Let's try out the new software.", ja: '新しいソフトウェアを試してみましょう。' },
    { en: 'He wants to try out for the school basketball team.', ja: '彼は学校のバスケットボールチームの選考を受けたいと思っている。' },
    { en: 'We should try out this new restaurant sometime.', ja: 'いつかこの新しいレストランを試してみるべきだ。' },
  ] },
  { verb: 'wake', particle: 'up', meaningJa: '目が覚める、起こす', examples: [
    { en: "Wake me up at 7 o'clock.", ja: '7時に起こしてください。' },
    { en: 'She woke up feeling refreshed.', ja: '彼女はすっきりした気分で目が覚めた。' },
    { en: 'The loud noise woke up the whole neighborhood.', ja: 'その大きな音は近所中を起こしてしまった。' },
  ] },
  { verb: 'warm', particle: 'up', meaningJa: '暖まる、準備運動する', examples: [
    { en: 'Warm up before you exercise.', ja: '運動する前に準備運動をしなさい。' },
    { en: "Let's warm up the soup before eating.", ja: '食べる前にスープを温めましょう。' },
    { en: 'The players warmed up on the field before the game.', ja: '選手たちは試合前にグラウンドでウォームアップした。' },
  ] },
  { verb: 'wash', particle: 'up', meaningJa: '皿を洗う、手を洗う', examples: [
    { en: 'Who is going to wash up after dinner?', ja: '夕食後、誰が皿を洗いますか。' },
    { en: 'Go wash up before dinner.', ja: '夕食前に手を洗いなさい。' },
    { en: 'He always washes up right after cooking.', ja: '彼はいつも料理の後すぐに皿を洗う。' },
  ] },
  { verb: 'wear', particle: 'out', meaningJa: 'すり減らす、疲れ果てさせる', examples: [
    { en: 'This work wore me out.', ja: 'この仕事は私を疲れ果てさせた。' },
    { en: 'These shoes are starting to wear out.', ja: 'この靴はすり減り始めている。' },
    { en: 'Taking care of three kids can really wear you out.', ja: '三人の子供の世話は本当に疲れる。' },
  ] },
  { verb: 'work', particle: 'out', meaningJa: '運動する、うまくいくだけでなく解決する', examples: [
    { en: 'Things will work out in the end.', ja: '物事は結局うまくいくものだ。' },
    { en: 'She works out at the gym every morning.', ja: '彼女は毎朝ジムで運動する。' },
    { en: 'We finally worked out a solution to the problem.', ja: '私たちはついにその問題の解決策を見つけた。' },
  ] },
  { verb: 'work', particle: 'on', meaningJa: '取り組む', examples: [
    { en: 'I am working on a new project.', ja: '私は新しいプロジェクトに取り組んでいます。' },
    { en: 'He is working on improving his English.', ja: '彼は英語を上達させることに取り組んでいる。' },
    { en: 'We need to work on our communication skills.', ja: '私たちはコミュニケーション能力を磨く必要がある。' },
  ] },
  { verb: 'write', particle: 'down', meaningJa: '書き留める', examples: [
    { en: 'Write down the address.', ja: '住所を書き留めてください。' },
    { en: 'She wrote down every word he said.', ja: '彼女は彼が言ったすべての言葉を書き留めた。' },
    { en: 'Please write down your questions for later.', ja: '後で聞くために質問を書き留めておいてください。' },
  ] },
  { verb: 'zero', particle: 'in', meaningJa: '集中する、照準を合わせる', examples: [
    { en: 'Zero in on the main problem.', ja: '主要な問題に焦点を当てなさい。' },
    { en: 'The detective zeroed in on the main suspect.', ja: '探偵は主要な容疑者に狙いを定めた。' },
    { en: "Let's zero in on what really matters here.", ja: 'ここで本当に重要なことに集中しましょう。' },
  ] },
];
