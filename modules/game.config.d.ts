declare namespace ig {
  interface LangOptions {
    systemFont?: string;
    useFor?: string;
    commaDigits?: boolean;
    fixedMsgWidth?: boolean;
    newlineAnywhere?: boolean;
    newlineException?: string[];
    newlineAfter?: string[];
    metrics?: typeof ig.SYSTEM_FONT_METRICS;
  }

  var LANG_DETAILS: { [locale: string]: ig.LangOptions };

  var SYSTEM_FONT_METRICS: { size: number[]; baseLine: number[] };
}
