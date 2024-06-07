// TODO this should live in ui-core, and be generated
import React from "https://esm.sh/react@18.2.0";

type IconType = "pencilRuler" | "bug" | "merge" | "documentCode" | "rocket";

const Icons = {
  pencilRuler: [
    <path d="M10.4714 1.98252C10.8619 1.592 11.4951 1.592 11.8856 1.98252L12.1678 2.26473C12.5583 2.65525 12.5583 3.28841 12.1678 3.67894L10.3303 5.51646L8.63388 3.82004L10.4714 1.98252Z"></path>,
    <path d="M3.19108 0.780777C3.38634 0.585514 3.70292 0.585514 3.89819 0.780777L12.9455 9.82808C13.1407 10.0233 13.1407 10.3399 12.9455 10.5352L11.108 12.3727C10.9127 12.568 10.5961 12.568 10.4009 12.3727L9.4821 11.4539L11.1785 9.75753L10.3303 8.90932L8.63389 10.6057L7.36157 9.33342L9.05799 7.637L8.20978 6.78879L6.51336 8.48521L5.24105 7.2129L6.93747 5.51648L6.08926 4.66827L4.39284 6.36469L3.12053 5.09237L4.81695 3.39596L3.96874 2.54775L2.27232 4.24417L1.35356 3.3254C1.15829 3.13014 1.15829 2.81356 1.35356 2.6183L3.19108 0.780777Z"></path>,
    <path d="M1.84821 12.3021L5.24105 10.6057L6.08926 9.75752L4.39284 8.0611L3.54463 8.90931L1.84821 12.3021Z"></path>,
  ],
  bug: [
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.4516 8C10.3806 8.72578 10.2335 9.40738 10.025 10.0199L11.4585 11.2941C11.6649 11.4776 11.6835 11.7936 11.5 12C11.3165 12.2064 11.0005 12.225 10.7941 12.0415L9.6131 10.9917C8.9721 12.224 8.03891 13 7 13C5.96109 13 5.02791 12.224 4.3869 10.9917L3.20589 12.0415C2.9995 12.225 2.68346 12.2064 2.5 12C2.31654 11.7936 2.33513 11.4776 2.54152 11.2941L3.97499 10.0199C3.76646 9.40738 3.61942 8.72578 3.54839 8H2C1.72386 8 1.5 7.77614 1.5 7.5C1.5 7.22386 1.72386 7 2 7H3.5C3.5 6.21506 3.58793 5.46532 3.74782 4.77815L2.54152 3.70589C2.33513 3.52243 2.31654 3.20639 2.5 3C2.68346 2.79361 2.99949 2.77502 3.20588 2.95848L6.33563 5.74048C6.71452 6.07726 7.28548 6.07726 7.66436 5.74048L10.7941 2.95848C11.0005 2.77502 11.3165 2.79361 11.5 3C11.6835 3.20639 11.6649 3.52243 11.4585 3.70589L10.2522 4.77815C10.4121 5.46531 10.5 6.21505 10.5 7L12 7C12.2761 7 12.5 7.22386 12.5 7.5C12.5 7.77614 12.2761 8 12 8H10.4516ZM6.6746 5.06255L4.35363 3.07315C4.99539 1.80327 5.94298 1 7 1C8.05702 1 9.00461 1.80327 9.64637 3.07315L7.3254 5.06255C7.13815 5.22305 6.86185 5.22305 6.6746 5.06255Z"
    ></path>,
  ],
  documentCode: [
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.8421 1.5H5.5V3C5.5 3.82843 4.82843 4.5 4 4.5H2.5V12C2.5 12.2761 2.72386 12.5 3 12.5H4.92105C5.19719 12.5 5.42105 12.7239 5.42105 13C5.42105 13.2761 5.19719 13.5 4.92105 13.5H3C2.17157 13.5 1.5 12.8284 1.5 12V3.91421C1.5 3.51639 1.65804 3.13486 1.93934 2.85355L3.85355 0.939339C4.13486 0.658035 4.51639 0.5 4.91421 0.5H9.8421C10.6705 0.5 11.3421 1.17157 11.3421 2V4.5C11.3421 4.77614 11.1182 5 10.8421 5C10.566 5 10.3421 4.77614 10.3421 4.5V2C10.3421 1.72386 10.1182 1.5 9.8421 1.5ZM4 3.5H2.70711L4.5 1.70711V3C4.5 3.27614 4.27614 3.5 4 3.5ZM10.3839 6.97726V6.07101C11.5316 6.07101 12.3526 6.26136 12.3526 7.66192V8.29261C12.3526 8.87499 12.5714 9.12215 13.2248 9.12215V10.2131C12.5714 10.2131 12.3526 10.4602 12.3526 11.0426V11.6704C12.3526 13.071 11.5316 13.2614 10.3839 13.2614V12.3579C11.0572 12.3579 11.1935 12.0994 11.1935 11.5483V10.7187C11.1935 10.2841 11.381 9.89204 12.2049 9.72442V9.61079C11.381 9.44317 11.1935 9.05113 11.1935 8.61363V7.78408C11.1935 7.23579 11.0572 6.97726 10.3839 6.97726ZM9.08807 12.3579V13.2642C7.94034 13.2642 7.11932 13.0739 7.11932 11.6733V11.0426C7.11932 10.4602 6.90057 10.2131 6.24716 10.2131V9.12215C6.90057 9.12215 7.11932 8.87499 7.11932 8.29261V7.66476C7.11932 6.2642 7.94034 6.07386 9.08807 6.07386V6.97726C8.41478 6.97726 8.27841 7.23579 8.27841 7.78692V8.61647C8.27841 9.05113 8.09091 9.44317 7.26705 9.61079V9.72442C8.09091 9.89204 8.27841 10.2841 8.27841 10.7216V11.5511C8.27841 12.0994 8.41478 12.3579 9.08807 12.3579Z"
    ></path>,
  ],
  rocket: [
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.3592 2.72806C12.5288 2.00543 11.8798 1.35639 11.1572 1.52601L10.8149 1.60634C8.61265 2.12327 6.76264 3.53846 5.67717 5.46022C5.6024 5.42433 5.51907 5.4072 5.43448 5.41165L3.60929 5.50772C3.48594 5.51421 3.36936 5.56613 3.28201 5.65347L1.63852 7.29696C1.46414 7.47134 1.62082 7.76614 1.86292 7.71916L3.43179 7.41475C3.59491 7.3831 3.76309 7.43455 3.88058 7.55205L4.63075 8.30222L4.49506 8.77084C4.38552 9.14916 4.73608 9.49972 5.1144 9.39017L5.58302 9.25448L6.33319 10.0047C6.45068 10.1221 6.50213 10.2903 6.47048 10.4534L6.16607 12.0223C6.1191 12.2644 6.41389 12.4211 6.58827 12.2467L8.23176 10.6032C8.3191 10.5159 8.37102 10.3993 8.37752 10.2759L8.47358 8.45075C8.47803 8.36617 8.4609 8.28283 8.42501 8.20806C10.3468 7.12259 11.762 5.27258 12.2789 3.07032L12.3592 2.72806ZM10.253 5.0464C9.86252 5.43692 9.22936 5.43692 8.83884 5.0464C8.44831 4.65587 8.44831 4.02271 8.83884 3.63218C9.22936 3.24166 9.86252 3.24166 10.253 3.63218C10.6436 4.02271 10.6436 4.65587 10.253 5.0464ZM2.19597 10.1257L1.41422 12.471L3.75949 11.6893C4.63121 11.3987 4.89238 10.2923 4.24264 9.64259C3.5929 8.99285 2.48655 9.25403 2.19597 10.1257Z"
    ></path>,
  ],
  merge: [
    <path d="M9 5V3H9.5C9.77614 3 10 3.22386 10 3.5L10 10.0854C9.4174 10.2913 9 10.8469 9 11.5C9 12.3284 9.67157 13 10.5 13C11.3284 13 12 12.3284 12 11.5C12 10.8469 11.5826 10.2913 11 10.0854V3.5C11 2.67157 10.3284 2 9.5 2H9V0L6 2.5L9 5Z"></path>,
    <path d="M4 3.91465C4.5826 3.70873 5 3.15311 5 2.5C5 1.67157 4.32843 1 3.5 1C2.67157 1 2 1.67157 2 2.5C2 3.15311 2.4174 3.70873 3 3.91465V10.0854C2.4174 10.2913 2 10.8469 2 11.5C2 12.3284 2.67157 13 3.5 13C4.32843 13 5 12.3284 5 11.5C5 10.8469 4.5826 10.2913 4 10.0854V3.91465Z"></path>,
  ],
};

type IconProps = {
  size: number;
  icon: IconType;
  color: string;
};

function Icon(props: IconProps): React.Element {
  const icon = Icons[props.icon];

  return (
    <svg
      fill={props.color}
      width={props.size}
      height={props.size}
      viewBox="0 0 14 14"
    >
      {icon}
    </svg>
  );
}

export default Icon;
export { IconType, Icon };
