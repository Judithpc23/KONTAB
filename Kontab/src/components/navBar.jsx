import React from "react";
import {
  Navbar,
  IconButton,
  Collapse,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";

 
export function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    
    <ul className="mt-2 flex flex-col-reverse gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:space-x-6">

      <Link to="/Salir">
      <section href="" className="lg:hidden flex items-center gap-x-2 p-1 border-b-[1px] lg:border-b-0 cursor-pointer text-[#353C43] hover:bg-gray-50">
      <img className="h-12 w-12 lg:h-8 lg:w-8 mr-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAERElEQVR4nO1ZSYhcVRR9TnGIY4PihIhZCCIKCioO6FYNikOciKC4EJcu3Cl/I3bVv+e83z+2YjmBLhxaIYILFUWDOwfQJok4xZCOMwmIOEbTLdd+Ld9b73cN/1dXlebAg+LXfffe8+59903O7cP/CCJyJcmdJL/y3l/txhEici2APSQXtAH4k+R6N84kOI5kpITEWJGRDiSGTsZ7fwLJDQAezbLs1CokCu0PADfGdE1NTZ0C4BEAD5I8qRYS6jiA7QUHZhcWFvbrRCKMeiwSHckAeK8gM5em6ZpKJBqNxskAdhhnfjNG15aQWB9x/BZ13pKxpZnkj0Zmp0apLxIkDyX5fiQlaOTmyvLfEpmZmTlAI2DJAPjSDM4DkWh+ICKreyYC4MmIsqfUGUPku7JJHCMSvv+LDIDvizqTJNmf5BORQXy6JxIkr4go2agGrKyIXA9gN4BdNt/LiCg0nXTF174kr7N6k0UyL0QG86quSCRJcoidFyQ3T09PH97TaHQg0g1EZLUWF5uGrVbrsG463x2pLOf2SqIOIoo0Tc8i+bvx6R63HPI8P7iY82EEUtcn6iCiIDlpfNqlxciVIZTHIvMfSE64IRPJsuzoMJf+0SUity5H5A1DRPolUSeRkqhscjE0Go2jTEmcz7LsdDciRNI0XaM+mVLfni0krzHRmK1Com4iCl0UjY/rnAXJpgkd3OgRaRgivk2I5MtG6KYqRgdBhOQ6M9ivxIx+XBTS+l3F6CCIiMgZhsi2NiG7fojIcW70IjJhiOyOGf3FpFb5gjMkIkmSHGh3HWNJpNVqHWQisidm9Nv/RGqR3FoU8t6fU8Vo0Pl5QedcVX3p4gaymDWfxIxuNGxvrmpYzzUAvib5TdfniB7Kry4ZbUKR4+UGVxPsZUW/AJB13JmLyOVG6CM3YgCwxfi4tk1IT4CRA8zZbkQgImfaipXn+ZFRYQAvDSq96k4rxuZH8aLNsP65jjJcFXmeH0vyJ1NVbyjtEO6dPjPMH3ZDBoCHjE9zSZKsWrYTyTtNp70kL1gxrw1InmcXVgB3uW72MwA+NB13VDm794tms3mELnpmYLfqVqUrBd77S0IkimRe7xjOGtFa3Fe9anyYF5HLKh32g6IX9crIDRhJkqwC8HzEftrvlvktqyzctAwszbLFq5/XIiTe7jqlYkrtleXSnAFwcd0kAFxo3mKW7G2ZnJw8ppLyNE2PLyEzH27MK78oNZvNE0k+ZudlaJvrfLXScL8ZMfL3w48+yfVTokXkfH1iI/lrie5NlSNRMmfuLxm1JcPbATxO8g6tfN7708JhaEJ/azrqf2H0vyjTQ3Kv7sbVphsU9GYewDvLOFG1zXrvL3IrgbCVuc1eIVVsn5K8faBRKEN4VdJT4LO6wezV+dDnOT1XVD3P14bwtnIpyXtJPkPyXb1AC89y2rbpN/0PwH26Qq/E4roPbkj4CzHgO1G152NCAAAAAElFTkSuQmCC"></img>
        <a className="text-[20px] hover:text-[#7BA8FF]">Salir</a>
      </section>
      </Link>
      
      <Link to="/Ayuda">
      <section className="lg:hidden flex items-center gap-x-2 p-1 border-b-[1px] lg:border-b-0 cursor-pointer text-[#353C43] hover:bg-gray-50">
      <img className="h-12 w-12 lg:h-8 lg:w-8 mr-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADAklEQVR4nO1ZS2sTURQeH/hABR8rXxvRtQ+07X9wJyKu/Q1CjS5mYW0y3u+7cUyKe5etFbFSf4JblYIL3fiIWFtFRLAVZOTADU5DUmfO3Ewq5MAhIZN85zvnnnvPOTdBMJShDKWwhGG4meQYgOskZwEskPwK4Jeoe78A4AHJijFmVH4TDFpqtdoRklUAH0gmOfU9gEmSh0sn3mg0DgC4R3JVQXyNAlgBMEVyfynkSV4GsFyUeBddstZe6hvxMAy3uqgnfdam2PJKnuROknMlkE9cWj0Wm17IT09PbwHwsCzy/KtzXlaipLRJeqxEo/CGHRR5OjXGXCxyVC4rj8VYipUxZpfTUYmm5tgF8Llare4rJXVcQTvZC7Ner5/SFD3kTSVXYVfzRn498qnAnNZgR1F0KLMD0h4oohS3fx+G4TaSEYCPJFsAavJZCr+p2A+38hybmt5mJBXlWpfn1ZQDY4oAvc3UAGrARZvN5u4URqvLd1rt51EU7dHYYCpIPcW1xLnB2ykSx/H2Ht/5nkqxHUoHxrOswKwGXByXVQBwo8fzZ20b1tpjSgdmsqzAghJ8Pf1tjDmfsnFFGaSXWRz44pn8D2PMhQ4bz5VYS1lSqPCQktJv1tozHfgVLR6AlVId6OxjAFyVdOqrA/CXQq+SJNkkmPJK8q4HzKUyN/H9NqashA9MZNnE2mO0i7HbqaDc9BSUmSwOVDw58Jrk8SiKTpB848mB8X86IL27J2Pe1Vp7Nust27tBk6W2mXM5O7kRSHOtTgRZRa773IBSxOATwXHD0XxBrJ+5Bhq3ClNFjArxFNbRgukTB5qhXgrHBnBgUTXUi8hdZQHD8+KEkAfwVItjOhrB3KKcX33pnaCoyIzsqzoP5GpRRC5a3YVrKeQBPPJ2udtxvd4ogXwsqx70S1xnudgH4p8Kb9isIsearIaHYpdIkZKo1+v1vUHZItVRbsw0vZP0NiQnrLUHg0GLawBHAFyTnl0GDzfZyXi66t6/kGfSEhtjzm2Iv1mHMpTg/5c/y928ufEXFLEAAAAASUVORK5CYII="></img>
        <a className="text-[20px] hover:text-[#7BA8FF]">Ayuda</a>
      </section>
      </Link>

      <Link to="/Contactos">
      <section className="lg:hidden flex items-center gap-x-2 p-1 border-b-[1px] lg:border-b-0 cursor-pointer text-[#353C43] hover:bg-gray-50">
      <img className="h-12 w-12 lg:h-8 lg:w-8 mr-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFlUlEQVR4nO2cXahVRRTHJyWtjKC0ekxCSih66OOhb6JIi6CCIh81oQ/Q9C3sZUcvF5z/f87d9xyR+xKRlnTIrJeihyJFMyN6KM2nijQs1HzOHjyxuHPhJmfm7HPb273n7vWDgcu+e++ZvdbMmjVrzRxjFEVRFEVRFEVRFEVRFKVhOOduBvAqyfdJfg/gLIB/fDnrr70n98i9dbd3QdDv9xeTXAfgIIALJAdFitzrn3khy7JFdX9HkgB4lOTxokKPlGMkH6n7e5Ihy7IrAOwsQfAXl16e50vr/r5GA2AFgCMVCH/WNB3udrvL6/7OxgqfM+aiEuHPUcJRVcJws3OkgPB+A5ADWNPpdG611i6TIn/LNZJTck+RkaDm6L+9f+cIoZ0AsF68ooKe0waSJ0coYUfZozhlb2cQEdSH0svHfW+v17ua5N6Yq9p676jf7y8G8FNESBgMBpfNV7nyLGcIzgetXieQXBfp/XvLEI4oAcAHkXqeN20FwMGQzZ+P2RlhjobOCQAOmBbHdi4EhLK+7PoAvBiaCzqdzkrTNnxgbTDM1Szi7YyL945OBEbcy6ZtSOSSwxWQV1hnN1DnLtM2JHzM4cJYU1Wd1tonAiPgO9M2fAx/MEQBt1RVp6yYA3WeNm2D5PlhwhCPpao6vTc0TAF/m7ZRhwLyPL9GFeBRE9TQSZjk2grrfFIn4RFuKMmpqhSgbugcnHOvNGUhBuAl0zZioQiSG8quj+TGUCjCWnuTaSMIB+NOlukNybsA/B6oa79pK4yHo/eVFY4m2Q/VY619zrSV/oxdjiXiWXFC5odWJ2QESQtGFCBl73zMkTc7H0WEL/PPw+O+d0ECYMcIJZyUeP4YSfmNEZtfububHHmeL5WtIiMENrs7oitRTQCrpZf7nr7aRzp7kZj/3HJIt6VcRLfbXS5J8gLC+7/lR5LX1dPV0lDC4QqFf0iFX8wc7ShT8H7CnVKzM6Z3hBJMkria6u3MkyzLFsm+Hdk6Mo8DGgdkkdV6P78sOp3OStm9QHK35HB9PuG8L2f8tV0SWGttbKcKrLXLnHOPk9wG4B2S3wD4meS5OQo4J9dkAvf3bJNnpqenr6q7/Ulirb2B5FYxI6HUZcEiz+4HsEXeWfd3NR4AD5D8RE4+lu2C+tOUH0sddX9n47DWPiQ99RIswmaV8ZVz7kHTdiYnJ28k+e44Hk7JpS9tMG2E5LN+Iq1D8HNHw1/OuadNW8iybIk/53VhDCGd8qfgN3uPaNXExMS109PTl0uRv+Wa/99rPuH/x5jrho68yyxkfOTy84JCOU1yEsBd863POXe3KNuvE4rU+VmZ5xKaGGgrdBKS5CaSV5ZVt7xLRk+RULW0ccEdY5UFEYCvC7iJeZVbE0URJN+UvaAjFPFtle2ow+aPMjvHnHO3Xao2WWtvjx0O9OXTBTEneBsc6/l76ggZiK2P7ZbwhSZlADw1wtvp1RmtLLBrQryjZ0zCi6xzKSTFETi65JVwNs/z601qSGg4ZnaaFKfPZvIOQXME4G2TWmwncgT1aBPDxL2Z0zPHI6boPpMKocCauH+X0tsZl+3bt98RCX9/YVKg0+ncG7H7b5mGQ3Ii1H7n3P2m6Ug8P7LCLW11W6V7GtlVt880Gck6RZIpm0wikNwaWa2vMAk2/HQKvX8WcRIiAbzmdiSfwx3W6EmTGCSnAp3pS9NE/NJ+qAfhnLvTJIa19p6QJ9fI0eyTIcMafMokyGDmh57+DHSox0zTAPBGwPzsNokCYE/gm143TcNviBo2AjabRAGwJZnQRGhbuZgmkygk1wZGwCHTNAD8GlBAsj8lT3JVQAG/mKYh2zsCjU32NEq3210e+KYzpmmEXFBJSZpEybJsScgVrbttiqIoiqIoiqIoiqIoiqIoiqIoimKS4F/eaY6nK7Y4hwAAAABJRU5ErkJggg=="></img>
        <a className="text-[20px] hover:text-[#7BA8FF]">Contactos</a>
      </section>
      </Link>

      <Link to="/Inventario">
      <section className="lg:hidden flex items-center gap-x-2 p-1 border-b-[1px] lg:border-b-0 cursor-pointer text-[#353C43] hover:bg-gray-50">
      <img className="h-12 w-12 lg:h-8 lg:w-8 mr-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFaElEQVR4nO1aWYgdRRTtuMS4ZMSouEQUF9Toj8uPSkCF+KEoCBpFhSH+iBLBuBGFYA8amfdenVP92hkxzw/FaCSM+BH8EQcVMRoUIe4RRdHgligmMeKuTy5TPda8ed1d3dNvmUwfaOiZ133r1qnqc2/dKs8rUaJEiRIlSpQoUaJEiRLdQ7VaXai1vg7A1SQP9uYCxsbG9tdaLyO5HsBekk25APxKckxrfZXv+wd4+xJ8398PwFIAIckdUafjLgA/kmzIO81mc543W6G1PpvkEIDP0zqdcH0JoBIEwRnebIBS6iSS95P8IEtHAawDcA+AdxOee5vkqlqtdqzXTxgeHj6C5CCAcQD/5hzpocheEARLzMz5LObZfwBsBnBLGIYDPem07/sLRLBEuEj+MYMpPo0AGwDOT9GO30i+IAPQaDQO6biCA1gqAkXy5wI6nUpAWvRo+Yx2ye8yMPJ8YR3H/6PwXcGddibAhuQMJJfLyAP4M4aMr8VnGbDcHa/VaqeS/KiDnc5FgI16vX4MgDsAvJUgsB+KOGcy3Gw255F8tUudz02ADZJXAPg+xv6zWY3d2MXO5yaA5CKJBiYqpEWgS51zdJLfWFPoKQCPk/ypHwgw/g2SfBHA3zH2fgDwKMmN9qfQaDQOdGGVlqHto6Ojh8n/wzA8yIS+9SR/6bcoYIXE5b7vzzc+DwD41iLhrsTOK6XOalHWa9o9V6lUDjejIA3+1as8QGZAlBTJzIgZ0JutdyR8L44lAMAr1sMveQ6oVqvHGyXeXAQBDplg00Sn1S5psRH01yzSNsR1/gbrod8BnO5CQIuNM0k+mHUB5LIWAPAJyQdInpbVryAIzon0QsRSKXXJlAeq1epCSR6sBtdmbSRu+iaEpmY3l8YkH7Fn0BRBZIvwKaUO9QqCLWAuKbRdHHFSbUfECmIQBEts4QNwn9chCLEAbiL5epvOvwzg+k6Wx0g+bAtiTTRE1thtRuFjkmuUUid3yJHn2rT5RCfaEi0TUSX5aZs2V0RFjGk/RoJB8g0AKwEcVZBDl9n2owzO3F9URBsysmlrBJJfVCqVE5zrdibmjkv8j5KjrJAEheQ2y+bTJJ+x/n4/b1HUcZWYri++788HcCWALQlCtVecV0pdnsVhUy6LbOzRWh8nl9xb9m93tSe+mux0o+lcnL9blFLXZtIXTnw3kYGdUoqKaWCHCTEXJNmr1+sn2im0UurO6De5t9raJcvcODsSDs1sfcyEybiy2U7r77udO96OAHO/OC3jA/BVXBWX5PNxCxOZRSTfs2w92S5Nd8wQh7TWp7T4P3MCPAtRuhonnpYzq80UnxS+uKWpGdVJQSR5cQbSJeE6N8H/Ygmwp2MQBBeaTyBJPPek5uITJGyw3t2d9tlJ23EZYlcIiCuatoha03U1JuHLdDyfgveSABuitiar29RSNl/lpaAlMZN3N+XJEHtKQJuy1QrphOcIeVbekXe9nOgbAnqFkgD2+QzgROq6FsBDstU25wgAsNJS+NvmHAHsrv2SAK/PR2iow/ZLAryZMAhgXGt93myZAeKrKd7MaAbcG1crlOVmvxFglsBrjI9T/NZa35rZoJqoFU6Wr1qIkPrdm1K9CcPw6F4RIG2LD+JLwu7wttwHq3yrVthSYcm0P1ckAS61P7OTLcdllhV21jB02x2etkNbBAF5d4c7hjAMBxx2hxNHwYWAtO21vLOvUIyMjBzpcEpje2vZKo4Ax93hd6RU1neHJpGwC2ON2lazE7yuze7w1oT3CotAXTsrDKBib0hmvQo57tZr+CaSpNQK7Wt3dOBxXzw6v6DdEVs5kNG1I6/9ApKLzPmdQTlz1CtH/gN8FWY5WjjtqQAAAABJRU5ErkJggg=="></img>
        <a className="text-[20px] hover:text-[#7BA8FF]">Inventario</a>
      </section>
      </Link>

      <Link to="/Gastos">
      <section className="lg:hidden flex items-center gap-x-2 p-1 border-b-[1px] lg:border-b-0 cursor-pointer text-[#353C43] hover:bg-gray-50">
        <img className="h-12 w-12 lg:h-8 lg:w-8 mr-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACrUlEQVR4nO2YuW/UQBTGLVCgpQbCJSgAwR8SiDgEfwISLXeDcMeu932fvdtEcsfRbZOKQ9BAIkRLS0o2GxoQgkgECLBopEFY3rFjz3rZQ/NJ04xH783Pb94cz/OcnJycnJycpkgkX5HsVdxe+r6/LekHwNIQ/PR0W/aGZTwMw/nUD3s7RJBeJgiAb2oycRzPlIkwgKvaxrNkv4hc0Xafl101cRzPADhL8rsNSN2zUBRFuwCsA/gdRdFRU7+IHLOxDQClQFQ0giDY7VmK5KK2tZDqXzD1F1W9Xt+bFRUTiBp4yRLgBIDXiR+yriLx97uKhIqI6m80GidtfIRheBnAj0wQAJ9Jiojst3EgIhcAfE07ULmRHKdyRH/bIHnREuYQyZDklz6QKIoO2BjVkztNcjNj/a6kJjGf+Hk/ReSUrV+Sh/tAbI2pdQvgY87WmAmiYT4NmI+9SkAA3M/b33OWVhLm4UhBAMyS/JWzhRuT3TB2s9ls7hsZCMlbW5y4Wduvqd2oHKTVau3Uh897kh2Sd9rt9naDkcc50TAeiDkgT9P2fd/fQTIAsEayqw5p1VcYBEDDMLHrBpBOzsSMV5Sc1knbVxM3jKuVAVkzgLwxOOo7N3IujStbgGwYflTXMK47FSAAVguDqHVpcHTtfy8tkjUDyN2yyd7Qyf6O5G1TsgN4VFWyA3iSkew1neirCqJUshcVgJtVbb+mzaSIqgKZVfeliT8QlQDcG/SKQvKBZylWBUJyD4APY3NpFJGDAxibMz12CoCoq/+crd8gCI70gehHCm2BROR8mYeVGqseY4M8rJDYBfueuvrPWj11wzA8nqyTjeSpyyksPvR0Cya+HMR/Bboz41KgI3nOqkA3iSXT5aqNAniRLmKrwvawIAAslY2yk5OTk5OTkzfG+gN7Je06rZWLAwAAAABJRU5ErkJggg=="></img>
        <a className="text-[20px] hover:text-[#7BA8FF]">Gastos</a>
      </section>
      </Link>

      <Link to="/Ingresos">
      <section className="lg:hidden flex items-center gap-x-2 p-1 border-b-[1px] lg:border-b-0 cursor-pointer text-[#353C43] hover:bg-gray-50">
        <img className="h-12 w-12 lg:h-8 lg:w-8 mr-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADt0lEQVR4nO1aS2vUUBS+1sdCFLVoFQRduHHpwqUIVdCVgjvFVkEX4sIX0gq+4gumnft9mRmZSkcF0WUXIqI7FR+IG/H9C1woUq1YRatoI8dJdQjJNJmXdzL54DIzyc3NOd/cc+93cqJUDOE4zhQAWwFske+qleAUnR8g6UgDcNGyrDbVis6zlUhwApxvCRKcSZyPNQlO0flBj7PDAd+FhMHYLIyO/z9/AcDJkt8nSOZjNxOcAOfFMdfpvwRI39iRwCJ8p7aXgDKhYqtmBYDPQXHtR4AfCQA+qWYFyVMkR/9MA8+iFkRACQlwCTyh4ohyBLQEmBDAZAYwCQEmawCTRZDJLsBkG2SiA1SrgYkOYKIDmOgAJjqAiQ5gogOY6AAmOkBVg3w+P0trvYbkXpIFADcBPCP5luQIgDH3AaN8jshx9/wNt/8ekp0yjmoWIZTNZheSPEjyAYAfk5WcwjQZB8B9GVfGVyYSkEql5kkBoVZOlyOD5NlMJjPXGAJSRedf+hg7BuCRGCxhAGBjJpNZobVeKtcUCoWZcr18ym85Lueln0x/ADmSDwF89Rn7hVxjBAEAdpcY9l4KCBL7hUJhei2MsixrGoBVADIA3kzcS2t9QJlAAN2LxLgGxGg7yddRDJQ6nta6W9pkNb1qCbirGgCS96IYSHJbyazpricBP0ke6uvrm6PqAADzARwh+SsiAaGdqooA/mvfSF7p7++fHdK3oHHbAawneZTkbZfg0vsYS4Djzoh93r5DQ0NTSe4C0OdpAwDOA7gO4CmADyG2RTMIAHAsrIG2bW+voS44bgQBWuvVAMbDEBA0WyoQROMA1hpBwIQW8AoWAIdVfQj4AmCHCokoTskuUdK3S0VBOp1eRvKc+/LBOwDLvX0AWFU4PixiiOTiKHZFIcB9T6hLWsXvAVmW1RakAklujujwHZJnRFlaljUjFo+6SW4SveBpkjLvtG17g23bK7XWHTW8X30JyGazS9yt6xXJ/bJ/1/wmxfjsINlD8jnJx2FDoe4EAOj1yd+vVpuyullmp7tu3CL53RMiPUYQwICV3S9bKyOE5BW0SwCukXwC4OP/EEIVATESQhVBx0gIRUmdYymEoqTOsRRCNQkXq4mFUENEEw0WQhURkG2QEEqn04tcsuomhCp9HtBbDyGUy+UW2La9DsBpKYz41Bx6jH4ipCMIIbcUdlmEkFseGw2xRoQyMEqKW1E6DMOFUJQUt6J0WBsuhBoCGCyEGoa0oUKo4bAME0LGgQ0WQvXCb2p4H2XaPpXYAAAAAElFTkSuQmCC"></img>
        <a className="text-[20px] hover:text-[#7BA8FF]">Ingresos</a>
      </section>
      </Link>

      <Link to="/Inicio">
      <section className="lg:hidden flex items-center gap-x-2 p-1 border-b-[1px] lg:border-b-0 cursor-pointer text-[#353C43] hover:bg-gray-50">
        <img className="h-12 w-12 lg:h-8 lg:w-8 mr-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACfElEQVR4nO2YvWsUQRjGJ/EDQRRUFAQVQRFBEW0s7SIYsBAsLAQtxL9A0W7s7m7neWZvueqqlMKBdmIUwcJCTBcVREQLiZ3fKObUuDLmIuNwS/b2dvc2OD8YOI7Z533enXe+VgiPx1MISqljAJ4CeGl+i5UEgIsAvpOMe+0HySui6kgp15Gcsoz/0wBcV0qtF1WE5F6Ss47hh6Y5icwGQbBHVAmSkyTfO0bbUsq1UsrVAOpOYp9Inhq1bxHH8ZipbZILlrl5ABfcviTPAvhq9ftlEpNSjo/EfBRFGwHcdN76a5JHk54Jw/AwyVfOaNyq1WqbSjUPYD/JZ475+0qpbcs922q1tgC44yTxIgiCQ6WYJ3mG5BenFCJT62k1Op3OKpLX7NIj+Q3A+cKM95uMJD8rpU5n1dRanwTwwZ387XZ7Ta7moyjaSvKeE+i51vrAsNoA9pkd29F+oLXenot5AEcAzDkBbjQajQ25BBBCGC2j6cyLORN7KOHeqvF3fQfwE8BVs3yKnInjeMxomxhWvHeZJ7epQ5JPLLG3ACZEwQCYMLGsuI8zzQmzIlhD+jGPek+LUupgb7f+E19rfW5gEXutBnBJlAzJy1b821kE3iwJNJvNXaJkwjDcbU/ogQXsTWYU5xUp5bhVwgsDC9hLWiEOi/ZAn8Dw0I8A/7M5wMWr5QzJbp9LvflvRil1opIJaK2Pm7tB0hcJp01WLgEuvvk05s3G9KiKCXSX+ve745LcbF/8q5hAvFz/IjQT8Qn0wY/AIPgS6oMvoUHwJVSBEuqmPRo4x4T5MjUTIXk3SzCS02VqJgJgZ+/TStq3ZvpN1+v1HWVqejwesbL5DXUK4j0mwgzkAAAAAElFTkSuQmCC"></img>
        <a className="text-[20px] hover:text-[#7BA8FF]">Inicio</a>
      </section>

      <section className="hidden lg:block flex justify-center item-center p-1 border-b-[1px] lg:border-b-0 text-[#353C43] hover:bg-gray-50 p-4">
        <div className="flex items-center justify-center">
        <img className="2xl:h-12 2xl:w-12 xl:h-12 xl:w-12 md:h-6 md:w-6 mr-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACfElEQVR4nO2YvWsUQRjGJ/EDQRRUFAQVQRFBEW0s7SIYsBAsLAQtxL9A0W7s7m7neWZvueqqlMKBdmIUwcJCTBcVREQLiZ3fKObUuDLmIuNwS/b2dvc2OD8YOI7Z533enXe+VgiPx1MISqljAJ4CeGl+i5UEgIsAvpOMe+0HySui6kgp15Gcsoz/0wBcV0qtF1WE5F6Ss47hh6Y5icwGQbBHVAmSkyTfO0bbUsq1UsrVAOpOYp9Inhq1bxHH8ZipbZILlrl5ABfcviTPAvhq9ftlEpNSjo/EfBRFGwHcdN76a5JHk54Jw/AwyVfOaNyq1WqbSjUPYD/JZ475+0qpbcs922q1tgC44yTxIgiCQ6WYJ3mG5BenFCJT62k1Op3OKpLX7NIj+Q3A+cKM95uMJD8rpU5n1dRanwTwwZ387XZ7Ta7moyjaSvKeE+i51vrAsNoA9pkd29F+oLXenot5AEcAzDkBbjQajQ25BBBCGC2j6cyLORN7KOHeqvF3fQfwE8BVs3yKnInjeMxomxhWvHeZJ7epQ5JPLLG3ACZEwQCYMLGsuI8zzQmzIlhD+jGPek+LUupgb7f+E19rfW5gEXutBnBJlAzJy1b821kE3iwJNJvNXaJkwjDcbU/ogQXsTWYU5xUp5bhVwgsDC9hLWiEOi/ZAn8Dw0I8A/7M5wMWr5QzJbp9LvflvRil1opIJaK2Pm7tB0hcJp01WLgEuvvk05s3G9KiKCXSX+ve745LcbF/8q5hAvFz/IjQT8Qn0wY/AIPgS6oMvoUHwJVSBEuqmPRo4x4T5MjUTIXk3SzCS02VqJgJgZ+/TStq3ZvpN1+v1HWVqejwesbL5DXUK4j0mwgzkAAAAAElFTkSuQmCC"></img>
        <a className="text-[15px] cursor-pointer hover:text-[#7BA8FF] underline">Inicio</a>
        </div>
      </section>
      </Link>

      <Link to="/contactos">
      <section className="hidden lg:block flex items-center justify-center gap-x-2 p-1 border-b-[1px] lg:border-b-0 text-[#353C43] hover:bg-gray-50 p-4">
      <div className="flex flex-row items-center">
        <img className="2xl:h-12 2xl:w-12 xl:h-12 xl:w-12 md:h-6 md:w-6 mr-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGbUlEQVR4nO2daaiUVRjHT7tmQRYV7St6Wz5F+0aLkpEtUtKHdkJKKExKJFqmRZs7nv//vDNeW260L2bXLCPqQ9ICUYGWfRCzBa0sK+Pa4hZqOnGYI+VlzpmZO/POzDvv84MDw9x33rP8z36e51ylBEEQBEEQBEEQBEEQBEGIjUwmszOALpLjSN5GcqoL9vM4+zf7jEgQI5lMZncnwFwA/SSLoeCe6QNwhf2tiNM4IYZorSeTXFVJhIA4P5G8o1Ao7CHC1AGA0QC+HawQZcI3AC4UUWqkr69vFwDdALY1UIztYSvJ6TYOEab6saIvBiEGhjdsdyiihMXYleSbNYwN/7ix5TMXVrnvqhZFWkoAko9VIcIGAE8BGEtyaJl3DDXGXOqe2VCFKDOllZQBwNWVWgOAJ3K53MHVFqB9FsCTbtzwvltrfZWIsmOt3hfAb4FCWwvgssEWGskxJP8MvH91NpsdLqL81zoKgZbRb4w5od7C0lqfCGBNQBSKIEqpfD5/IICNHjE2kzy/UQVl1yAkt/jGJq31AakXheTdgdZxX6MLCMCDgVYyNfWCAPjSI8bPWuthjS6gWbNm7UXyF48gS1ItiNb6iEBtvTOueElO8cXb3d19qEorWuvrAlPRo+KK1xhzdKCbvEalFZLZVnUdJJd64p6u0grJOZ5a+loT4p7nEWS2Sisk3/EIUog7bgA9nrjfVmkFwAJPLc02Ie5ujyALVFoBMN8jyLNNiPt5jyCvq7TiNv7KCfJuq1qn3cBUaQXAXZ5CWRfn4ZE9W7cblp7p9mSVVrTW5wUWhmNijPeSwDrkbJVWbE31HSIhxr7cN3a5lplukyHfWoSlAjozhvhO9xlPAHhZpR0AFwUE+bzcMe1g6e3t3RPAF4H4RjcqrkTjDBSKnjC3WCzuVG8c9h0AXgmJ34h4OgKt9cUBQYokn66nb3dj1TOhOKR1DMC2BIZF+cju0tYqxowZM44h+XGFd88ZrNgdS09Pz34kV1YouE12nyufzx9e5VnLTPubCu/83hpZNCeXCcMYc7KdelYowO1hMYBHSN5i7bBssJ/dd4urfMdaY8xJrc53W2OMGUVyfZUFWk9Yr7W+oNX5TQQsrRVCdlp1BQC/aq1Pa3U+E0WuZHX4fgyCvGeMOajV+UskxdLa4UZrgdIAIaxR9vWy1mgAmUxmCICJNQzWOwz+xphbxXsqJgB0AbjdrboXO1/CTW5K3O9Em20dQKMoGhlXOlJPNpsdboy5nOS9JF8CsAjAcpK/bxfEfnbfLQTwIoB77G+iKNon9QXYCKIoGgngYbvXVaMjTjlXhkUkHwIwQsSpgd7e3t2MMTcA+DTGae8ndoC3HlsiTkAIABMBfBfjYnBgWGFX9yLMAIwx51hrRTZPiIEt5itxly5tAA5zvoBxuD8XaxRlm7WCsYdYqezGrFdUwL62GCi45W6rfppdNJIcb/e/3B7YePfddPfMikGIsySKouNUmrBWH1V6yBadw+YHJG+2W+qDiMtuw08A8GEl58//ib7OHpqpNGBnNz63Mu5YKFawfBRFRzYqbvsue55STWVw7nTXqk7G1vIqxoutAB4vFAr7x5UO60tYjbu0S+tNqhOx1yRVsbhbqrU+pVlpslvwJJdVSNOWelyy2xKSp5L8u0JtfC4On8IqfQ5fqJC2jfY0U3UCdh8pNNtx3cIDrU4ngEmh7hTADx1x9m5NQiuIMUG1CSzNxkJj3FzVyfeXxOlpO1jcvY2hNF+pkkgul9vbXa2XuFt4ADwaSPdKO+6opOFzGXNhYTtbmRdK/iMh89ZpKknYwc/nEONmW8eqNgfACN/MEMBfibo9qMJ9IverhIBOyIc71/DZVP2YpHsOSQ4NjIOrbV5Vu+POvX3T3EkqYejSncG+/IxV7Y69hcGT+DVJPGvQWg9zhhTl8vSqSsAVr2Xtcu1UUiUUkr2ePK1r625La32ur3lHUXSGSvYRc7FcMMacpdoVABlPTepP8n8r6CvdtP1Hs269axgk3/LUpHkq4cDvSj1ftSskv/YIMkUlHJb+P0m5vC1TbTyglz2atd5NqgMO2Fi+hWxuy4EdwGGB+XqXSjha6+MDq/ZDVJISHOf5eDPvF05UhXPHtL4a1LDbGFqFXdT68tdMO4Ba3QVGlQuqQzCe/CVq51cQBEEQBEEQBEEQBEEQBEEQBEEQBNW+/AtkmooGqKtmdAAAAABJRU5ErkJggg=="></img>
        <a className="text-[15px] cursor-pointer hover:text-[#7BA8FF] underline" >Contactos</a>
        </div>
      </section>
      </Link>

      <Link to="/Analisis">
      <section className=" hidden lg:block flex items-center gap-x-2 p-1 border-b-[1px] lg:border-b-0 text-[#353C43] hover:bg-gray-50 p-4">
      <div className="flex flex-row items-center">
        <img className="2xl:h-12 2xl:w-12 xl:h-12 xl:w-12 md:h-6 md:w-6 mr-2" src="data:image/png;base64,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"></img>
        <a className="text-[15px] cursor-pointer hover:text-[#7BA8FF] underline">Analisis</a>
        </div>
      </section>
      </Link>
      
      <Link to="/Usuario">
      <section className="flex items-center gap-x-2 p-1 border-b-[1px] lg:border-b-0 text-[#353C43] hover:bg-gray-50 p-4">
        <a className="text-[15px] cursor-pointer hover:text-[#7BA8FF]">User1@outlook.com</a>
        <img className="h-12 w-12 lg:h-10 lg:w-10 mr-2" src="data:image/png;base64,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"></img>
      </section>
      </Link>


    </ul>
  );
 
  return (
      <Navbar className="px-10 py-2 lg:py-0 lg:px-20 rounded-none">
          <div className="flex justify-end items-center h-[45px] lg:h-[60px] lg:w-[100%]">

              <div className="hidden lg:block">{navList}</div>

              <IconButton
                  variant="text"
                  className="h-auto w-auto lg:hidden self-center mb-10 mr-10"
                  ripple={false}
                  onClick={() => setOpenNav(!openNav)}
              >
                  {openNav ? (
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48" fill="#0094FF">
                          <path d="M 39.486328 6.9785156 A 1.50015 1.50015 0 0 0 38.439453 7.4394531 L 24 21.878906 L 9.5605469 7.4394531 A 1.50015 1.50015 0 0 0 8.484375 6.984375 A 1.50015 1.50015 0 0 0 7.4394531 9.5605469 L 21.878906 24 L 7.4394531 38.439453 A 1.50015 1.50015 0 1 0 9.5605469 40.560547 L 24 26.121094 L 38.439453 40.560547 A 1.50015 1.50015 0 1 0 40.560547 38.439453 L 26.121094 24 L 40.560547 9.5605469 A 1.50015 1.50015 0 0 0 39.486328 6.9785156 z"></path>
                      </svg>
                  ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 30 30" fill="#353c43">
                          <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
                      </svg>
                  )}
              </IconButton>
          </div>

          <Collapse open={openNav}>
              <div className="py-7 lg:hidden border-[#A5C4FF]">
                  {navList}
              </div>
          </Collapse>
      </Navbar>
  );
}