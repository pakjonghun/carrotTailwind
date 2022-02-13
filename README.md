## Tailwind css

맥은 커맨드 + I 키로 자동완성 가능
space 로 자식요소에 마진을 줄 수 있다. 자동으로 마진이 계산되어 적용된다.
aspect-square 는 aspect radio 1/1 속성과 같다.
cursor- : 커서 포인터 종류가 많음!!

- just in compiler

  - 속성을 수동으로 바로 커스텀 가능함.아래처럼

    ```
    return <h1 className="bg-[url('/vecal.svg')] bg-[rgba(0,0,0,0.2)] w-[40%]">hellow</h1>;
    ```

- modifiers

  - portrait : 화면이 세로모드 변경시 스타일링
  - landscape : 화면이 가로모드로 변경시! 스타일링
  - first-letter: 첫 글자만 스타일링
  - group : group-hover 등 modifier 사용
  - empty : value 가 비어 있을경우 속성 조정해 주는 modifier
  - map 에서 유용햔 modifiers(first ,last ,odd ,event )
  - input 에서 유용한 modifiers(required, valid, invalid, disable 등등 엄청 많음)
  - peer : sibling selector 이용한 방식이므로 peer 다음에 위치, 같은 depth 에 위치 사용해야함
    - css 는 top-down 방식이므로 한계가 있음
    - valid 에서 유용햔 modifier(peer, peer-valid, peer-invalid)
  - selection : 선택을 했을때 스타일 지정
  - open : detail태그의 summary 를 열었을때 스타일 지정
  - list : ul 태그의 list 스타일 지정 -decimal -disc 등이 있음
  - marker: ul 태그의 리스트 스타일로 지정된 아이템을 스타일링
  - file : input file type 을 스타일링
  - darkMode

    - follow operator

      ```
      //tailwind.config.js

          module.exports = {
      content: ["./pages/**/*.tsx", "./components/pages/**/*.tsx"],
      theme: {
        extend: {},
      },
      darkMode: "media",
      plugins: [],
       };

      ```

      ```
      //index.js
      <element className:"dark:bg-red-50"/>
      ```

    - follow user choice

      ```
      //tailwind.config.js

          module.exports = {
      content: ["./pages/**/*.tsx", "./components/pages/**/*.tsx"],
      theme: {
        extend: {},
      },
      darkMode: "class",
      plugins: [],
       };
      ```

      ```
      //index.js
      <parent className="dark">
        <child className="dark:bg-red-50">
        </child>
      </parent>

      ```

## enter page

> string literal 이 아닌 함수, plugin 적용, appearance-none(모든 스타일 리셋)

---

## home page

> space-x-10 이런 helper 는 두 요소 간격을 자동 계산해서 띄워주시면 mt mb 가 일정하게 되지는 않을 수도 있었다.

---

## detail page

> text-base : 텍스트 스타일을 리셋 해줌

---

## upload page

> 인풋을 다룰때 사용되는 패턴 label 로 스타일링 인풋은 숨김

```
 <label>
            <svg
              className="h-12 w-12"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input type="file" className="hidden" />
          </label>
```

---
