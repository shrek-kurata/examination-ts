/**
 * @description FX取引では、異なる国の通貨を交換することで為替さの利益を得ることができます。例えば、1どる100円の時に1000ドル買い、価格変動により1どる108円になった時にうると、(108円 - 100円) * 1000ドル = 8000円の利益を得ることができます。
 * ある通貨について、時刻tにおける価格Rt(t=0,1,2...n-1)が入力として与えられるので、価格の差Rj-Ri(ただし、j > i)の最大値を求めてください。
 * @param　入力の最初の行に整列の長さを表す整数Nが与えられます。２行目に、N個の整数が空白区切りで与えられます。
 * @returns 出力はN行からなります。挿入ソートの各計算ステップでの途中結果を1行に出力してください。配列の要素は一つの空白で区切って出力してください。最後の要素の後の空白など、余計な空はyクヤ改行を含めるとPresentationErrorとなりますので注意してください。
 * @limit 1<= N <= 100,
 * -<= Aの要素 <= 1000
 */
export function insertionSort(lines: string[]) {
  /// 整数n
  let values = lines[1]?.split(' ').map(v => Number(v))
  if (!values) {
    console.error('Not Line')
    return
  }
  for (const i in values) {
    const index = Number(i);
    /// 未ソート部分の先頭から要素を一つ取り出し記録
    const value = values[index];
    let j = index - 1;
    if (value) {
      while (j >= 0 && (values[j] ?? 0) > value) {
        const jValue = values[j]
        if (values[j + 1] && jValue) {
          values[j + 1] = jValue
          j--
        }
      }
      /// 最後に空いた位置に「取り出した要素」を挿入
      values[j + 1] = value
    }

  }
  console.log(values.join(' '))
}
