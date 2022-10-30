    export const WordifyRupiah=(num)=>{
                if(typeof num !== 'number') {
                    throw new TypeError('Harga harus angka');
                }
        
                if(num > 1e19) {
                    throw new RangeError('Harga harus dibawah < 1e19');
                }
        
                if(num < -1e19) {
                    throw new RangeError('Harga harus diatas > -1e19');
                }
        
                if(Math.abs(num) < 1000) {
                    return num;
                }
        
                var shortNumber;
                var exponent;
                var size;
                var sign = num < 0 ? '-' : '';
                var suffixes = {
                    ' Ribu': 6,
                    ' Juta': 9,
                    ' Miliar': 12,
                    ' Triliun': 16
                };
        
                num = Math.abs(num);
                size = Math.floor(num).toString().length;
        
                exponent = size % 3 === 0 ? size - 3 : size - (size % 3);
                shortNumber = Math.round(10 * (num / Math.pow(10, exponent))) / 10;
        
                for(var suffix in suffixes) {
                    if(exponent < suffixes[suffix]) {
                        shortNumber += suffix;
                        break;
                    }
                }
        
                return sign + shortNumber;
            };

