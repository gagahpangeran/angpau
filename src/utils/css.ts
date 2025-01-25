type Modifiers = string | { [key: string]: boolean } | undefined;

export default function classModifiers(
  className: string,
  ...modifiers: Modifiers[]
) {
  let withModifiers = className;

  modifiers.forEach(mod => {
    if (mod !== undefined) {
      if (typeof mod === "string") {
        withModifiers += ` ${className}--${mod}`;
      } else {
        Object.entries(mod).map(([mod, isValid]) => {
          if (isValid) {
            withModifiers += ` ${className}--${mod}`;
          }
        });
      }
    }
  });

  return withModifiers;
}
