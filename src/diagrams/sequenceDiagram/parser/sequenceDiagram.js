/* parser generated by jison 0.4.17 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var sequenceDiagram = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,2],$V1=[1,3],$V2=[1,4],$V3=[2,4],$V4=[1,9],$V5=[1,11],$V6=[1,12],$V7=[1,14],$V8=[1,15],$V9=[1,17],$Va=[1,18],$Vb=[1,19],$Vc=[1,20],$Vd=[1,22],$Ve=[1,23],$Vf=[1,4,5,10,15,16,18,20,21,22,23,24,25,37],$Vg=[4,5,10,15,16,18,20,21,22,23,25,37],$Vh=[35,36,37],$Vi=[1,67];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"start":3,"SPACE":4,"NL":5,"SD":6,"document":7,"line":8,"statement":9,"participant":10,"actor":11,"AS":12,"restOfLine":13,"signal":14,"activate":15,"deactivate":16,"note_statement":17,"title":18,"text":19,"loop":20,"end":21,"opt":22,"alt":23,"else":24,"note":25,"placement":26,"text2":27,"over":28,"actor_pair":29,"spaceList":30,",":31,"left_of":32,"right_of":33,"signaltype":34,"+":35,"-":36,"ACTOR":37,"SOLID_OPEN_ARROW":38,"DOTTED_OPEN_ARROW":39,"SOLID_ARROW":40,"DOTTED_ARROW":41,"SOLID_CROSS":42,"DOTTED_CROSS":43,"TXT":44,"$accept":0,"$end":1},
terminals_: {2:"error",4:"SPACE",5:"NL",6:"SD",10:"participant",12:"AS",13:"restOfLine",15:"activate",16:"deactivate",18:"title",19:"text",20:"loop",21:"end",22:"opt",23:"alt",24:"else",25:"note",28:"over",31:",",32:"left_of",33:"right_of",35:"+",36:"-",37:"ACTOR",38:"SOLID_OPEN_ARROW",39:"DOTTED_OPEN_ARROW",40:"SOLID_ARROW",41:"DOTTED_ARROW",42:"SOLID_CROSS",43:"DOTTED_CROSS",44:"TXT"},
productions_: [0,[3,2],[3,2],[3,2],[7,0],[7,2],[8,2],[8,1],[8,1],[9,5],[9,3],[9,2],[9,3],[9,3],[9,2],[9,4],[9,4],[9,4],[9,7],[17,4],[17,4],[30,2],[30,1],[29,3],[29,1],[26,1],[26,1],[14,5],[14,5],[14,4],[11,1],[34,1],[34,1],[34,1],[34,1],[34,1],[34,1],[27,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 3:
 yy.apply($$[$0]);return $$[$0]; 
break;
case 4:
 this.$ = [] 
break;
case 5:
$$[$0-1].push($$[$0]);this.$ = $$[$0-1]
break;
case 6: case 7:
 this.$ = $$[$0] 
break;
case 8:
 this.$=[];
break;
case 9:
$$[$0-3].description=$$[$0-1]; this.$=$$[$0-3];
break;
case 10:
this.$=$$[$0-1];
break;
case 12:
this.$={type: 'activeStart', signalType: yy.LINETYPE.ACTIVE_START, actor: $$[$0-1]};
break;
case 13:
this.$={type: 'activeEnd', signalType: yy.LINETYPE.ACTIVE_END, actor: $$[$0-1]};
break;
case 16:

		$$[$0-1].unshift({type: 'loopStart', loopText:$$[$0-2], signalType: yy.LINETYPE.LOOP_START});
		$$[$0-1].push({type: 'loopEnd', loopText:$$[$0-2], signalType: yy.LINETYPE.LOOP_END});
		this.$=$$[$0-1];
break;
case 17:

		$$[$0-1].unshift({type: 'optStart', optText:$$[$0-2], signalType: yy.LINETYPE.OPT_START});
		$$[$0-1].push({type: 'optEnd', optText:$$[$0-2], signalType: yy.LINETYPE.OPT_END});
		this.$=$$[$0-1];
break;
case 18:

		// Alt start
		$$[$0-4].unshift({type: 'altStart', altText:$$[$0-5], signalType: yy.LINETYPE.ALT_START});
		// Content in alt is already in $$[$0-4]
		// Else
		$$[$0-4].push({type: 'else', altText:$$[$0-2], signalType: yy.LINETYPE.ALT_ELSE});
		// Content in other alt
		$$[$0-4] = $$[$0-4].concat($$[$0-1]);
		// End
		$$[$0-4].push({type: 'altEnd', signalType: yy.LINETYPE.ALT_END});

		this.$=$$[$0-4];
break;
case 19:

		this.$ = [$$[$0-1], {type:'addNote', placement:$$[$0-2], actor:$$[$0-1].actor, text:$$[$0]}];
break;
case 20:

		// Coerce actor_pair into a [to, from, ...] array
		$$[$0-2] = [].concat($$[$0-1], $$[$0-1]).slice(0, 2);
		$$[$0-2][0] = $$[$0-2][0].actor;
		$$[$0-2][1] = $$[$0-2][1].actor;
		this.$ = [$$[$0-1], {type:'addNote', placement:yy.PLACEMENT.OVER, actor:$$[$0-2].slice(0, 2), text:$$[$0]}];
break;
case 23:
 this.$ = [$$[$0-2], $$[$0]]; 
break;
case 24:
 this.$ = $$[$0]; 
break;
case 25:
 this.$ = yy.PLACEMENT.LEFTOF; 
break;
case 26:
 this.$ = yy.PLACEMENT.RIGHTOF; 
break;
case 27:
 this.$ = [$$[$0-4],$$[$0-1],{type: 'addMessage', from:$$[$0-4].actor, to:$$[$0-1].actor, signalType:$$[$0-3], msg:$$[$0]},
	              {type: 'activeStart', signalType: yy.LINETYPE.ACTIVE_START, actor: $$[$0-1]}
	             ]
break;
case 28:
 this.$ = [$$[$0-4],$$[$0-1],{type: 'addMessage', from:$$[$0-4].actor, to:$$[$0-1].actor, signalType:$$[$0-3], msg:$$[$0]},
	             {type: 'activeEnd', signalType: yy.LINETYPE.ACTIVE_END, actor: $$[$0-4]}
	             ]
break;
case 29:
 this.$ = [$$[$0-3],$$[$0-1],{type: 'addMessage', from:$$[$0-3].actor, to:$$[$0-1].actor, signalType:$$[$0-2], msg:$$[$0]}]
break;
case 30:
this.$={type: 'addActor', actor:$$[$0]}
break;
case 31:
 this.$ = yy.LINETYPE.SOLID_OPEN; 
break;
case 32:
 this.$ = yy.LINETYPE.DOTTED_OPEN; 
break;
case 33:
 this.$ = yy.LINETYPE.SOLID; 
break;
case 34:
 this.$ = yy.LINETYPE.DOTTED; 
break;
case 35:
 this.$ = yy.LINETYPE.SOLID_CROSS; 
break;
case 36:
 this.$ = yy.LINETYPE.DOTTED_CROSS; 
break;
case 37:
this.$ = $$[$0].substring(1).trim().replace(/\\n/gm, "\n");
break;
}
},
table: [{3:1,4:$V0,5:$V1,6:$V2},{1:[3]},{3:5,4:$V0,5:$V1,6:$V2},{3:6,4:$V0,5:$V1,6:$V2},o([1,4,5,10,15,16,18,20,22,23,25,37],$V3,{7:7}),{1:[2,1]},{1:[2,2]},{1:[2,3],4:$V4,5:$V5,8:8,9:10,10:$V6,11:21,14:13,15:$V7,16:$V8,17:16,18:$V9,20:$Va,22:$Vb,23:$Vc,25:$Vd,37:$Ve},o($Vf,[2,5]),{9:24,10:$V6,11:21,14:13,15:$V7,16:$V8,17:16,18:$V9,20:$Va,22:$Vb,23:$Vc,25:$Vd,37:$Ve},o($Vf,[2,7]),o($Vf,[2,8]),{11:25,37:$Ve},{5:[1,26]},{11:27,37:$Ve},{11:28,37:$Ve},{5:[1,29]},{4:[1,30]},{13:[1,31]},{13:[1,32]},{13:[1,33]},{34:34,38:[1,35],39:[1,36],40:[1,37],41:[1,38],42:[1,39],43:[1,40]},{26:41,28:[1,42],32:[1,43],33:[1,44]},o([5,12,31,38,39,40,41,42,43,44],[2,30]),o($Vf,[2,6]),{5:[1,46],12:[1,45]},o($Vf,[2,11]),{5:[1,47]},{5:[1,48]},o($Vf,[2,14]),{19:[1,49]},o($Vg,$V3,{7:50}),o($Vg,$V3,{7:51}),o([4,5,10,15,16,18,20,22,23,24,25,37],$V3,{7:52}),{11:55,35:[1,53],36:[1,54],37:$Ve},o($Vh,[2,31]),o($Vh,[2,32]),o($Vh,[2,33]),o($Vh,[2,34]),o($Vh,[2,35]),o($Vh,[2,36]),{11:56,37:$Ve},{11:58,29:57,37:$Ve},{37:[2,25]},{37:[2,26]},{13:[1,59]},o($Vf,[2,10]),o($Vf,[2,12]),o($Vf,[2,13]),{5:[1,60]},{4:$V4,5:$V5,8:8,9:10,10:$V6,11:21,14:13,15:$V7,16:$V8,17:16,18:$V9,20:$Va,21:[1,61],22:$Vb,23:$Vc,25:$Vd,37:$Ve},{4:$V4,5:$V5,8:8,9:10,10:$V6,11:21,14:13,15:$V7,16:$V8,17:16,18:$V9,20:$Va,21:[1,62],22:$Vb,23:$Vc,25:$Vd,37:$Ve},{4:$V4,5:$V5,8:8,9:10,10:$V6,11:21,14:13,15:$V7,16:$V8,17:16,18:$V9,20:$Va,22:$Vb,23:$Vc,24:[1,63],25:$Vd,37:$Ve},{11:64,37:$Ve},{11:65,37:$Ve},{27:66,44:$Vi},{27:68,44:$Vi},{27:69,44:$Vi},{31:[1,70],44:[2,24]},{5:[1,71]},o($Vf,[2,15]),o($Vf,[2,16]),o($Vf,[2,17]),{13:[1,72]},{27:73,44:$Vi},{27:74,44:$Vi},{5:[2,29]},{5:[2,37]},{5:[2,19]},{5:[2,20]},{11:75,37:$Ve},o($Vf,[2,9]),o($Vg,$V3,{7:76}),{5:[2,27]},{5:[2,28]},{44:[2,23]},{4:$V4,5:$V5,8:8,9:10,10:$V6,11:21,14:13,15:$V7,16:$V8,17:16,18:$V9,20:$Va,21:[1,77],22:$Vb,23:$Vc,25:$Vd,37:$Ve},o($Vf,[2,18])],
defaultActions: {5:[2,1],6:[2,2],43:[2,25],44:[2,26],66:[2,29],67:[2,37],68:[2,19],69:[2,20],73:[2,27],74:[2,28],75:[2,23]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        function _parseError (msg, hash) {
            this.message = msg;
            this.hash = hash;
        }
        _parseError.prototype = Error;

        throw new _parseError(str, hash);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:return 5;
break;
case 1:/* skip all whitespace */
break;
case 2:/* skip same-line whitespace */
break;
case 3:/* skip comments */
break;
case 4:/* skip comments */
break;
case 5: this.begin('ID'); return 10; 
break;
case 6: this.begin('ALIAS'); return 37; 
break;
case 7: this.popState(); this.popState(); this.begin('LINE'); return 12; 
break;
case 8: this.popState(); this.popState(); return 5; 
break;
case 9: this.begin('LINE'); return 20; 
break;
case 10: this.begin('LINE'); return 22; 
break;
case 11: this.begin('LINE'); return 23; 
break;
case 12: this.begin('LINE'); return 24; 
break;
case 13: this.popState(); return 13; 
break;
case 14:return 21;
break;
case 15:return 32;
break;
case 16:return 33;
break;
case 17:return 28;
break;
case 18:return 25;
break;
case 19: this.begin('ID'); return 15; 
break;
case 20: this.begin('ID'); return 16; 
break;
case 21:return 18;
break;
case 22:return 6;
break;
case 23:return 31;
break;
case 24:return 5;
break;
case 25: yy_.yytext = yy_.yytext.trim(); return 37; 
break;
case 26:return 40;
break;
case 27:return 41;
break;
case 28:return 38;
break;
case 29:return 39;
break;
case 30:return 42;
break;
case 31:return 43;
break;
case 32:return 44;
break;
case 33:return 35;
break;
case 34:return 36;
break;
case 35:return 5;
break;
case 36:return 'INVALID';
break;
}
},
rules: [/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:((?!\n)\s)+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:participant\b)/i,/^(?:[^\->:\n,;]+?(?=((?!\n)\s)+as(?!\n)\s|[#\n;]|$))/i,/^(?:as\b)/i,/^(?:(?:))/i,/^(?:loop\b)/i,/^(?:opt\b)/i,/^(?:alt\b)/i,/^(?:else\b)/i,/^(?:[^#\n;]*)/i,/^(?:end\b)/i,/^(?:left of\b)/i,/^(?:right of\b)/i,/^(?:over\b)/i,/^(?:note\b)/i,/^(?:activate\b)/i,/^(?:deactivate\b)/i,/^(?:title\b)/i,/^(?:sequenceDiagram\b)/i,/^(?:,)/i,/^(?:;)/i,/^(?:[^\+\->:\n,;]+)/i,/^(?:->>)/i,/^(?:-->>)/i,/^(?:->)/i,/^(?:-->)/i,/^(?:-[x])/i,/^(?:--[x])/i,/^(?::[^#\n;]+)/i,/^(?:\+)/i,/^(?:-)/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"LINE":{"rules":[2,3,13],"inclusive":false},"ALIAS":{"rules":[2,3,7,8],"inclusive":false},"ID":{"rules":[2,3,6],"inclusive":false},"INITIAL":{"rules":[0,1,3,4,5,9,10,11,12,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = sequenceDiagram;
exports.Parser = sequenceDiagram.Parser;
exports.parse = function () { return sequenceDiagram.parse.apply(sequenceDiagram, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}